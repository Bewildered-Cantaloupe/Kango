// load all the things we need
var LocalStrategy = require('passport-local').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;


// load up the user model
var User = require('../app/models/user');

//load the auth variables
var configAuth = require('./auth');

// expose this function to our app using module.exports
module.exports = function(passport) {

    // PASSPORT SESSION SIGNUP
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.twitter_id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        // new User({twitter_id: twitter_id}).fetch().then(function(err, user) {
        //     done(err, user);
        // });
        done(null, id);
    });



    // LOCAL SIGNUP
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {

        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        new User({ 'email' :  email }).fetch().then(function(err, user) {
            // if there are any errors, return the error
            if (err)
                return done(err);

            // check to see if theres already a user with that email
            if (existingUser) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } 
            
            if (req.user) {
                var user = req.user;
                user.email = email;
                user.password = user.generateHash(password);
                user.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, user);
                });
            }


            else {

                // if there is no user with that email
                // create the user
                var newUser            = new User();

                // set the user's local credentials
                newUser.email    = email;
                newUser.password = newUser.generateHash(password);

                // save the user
                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }

        });    

        });

    }));

    // LOCAL LOGIN
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        //asynchronous
        process.nextTick(function() {
        new User({ 'email' :  email }).fetch().then(function(err, user) {
            // if there are any errors, return the error before anything else
            if (err)
                return done(err);

            // if no user is found, return the message
            if (!user)
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

            // if the user is found but the password is wrong
            if (!user.validPassword(password))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

            // all is well, return successful user
            else
            return done(null, user);
        });
    });

    }));




    //TWITTER
    passport.use(new TwitterStrategy({

        consumerKey     : configAuth.twitterAuth.consumerKey,
        consumerSecret  : configAuth.twitterAuth.consumerSecret,
        callbackURL     : configAuth.twitterAuth.callbackURL,
        passReqToCallback : true 
        // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },

    //twitter will send back token and profile
    function callback(req, token, tokenSecret, profile, done) {


        // make the code asynchronous
    // User.findOne won't fire until we have all our data back from Twitter
        process.nextTick(function() {

            new User({ 'twitter_id' : profile.id }).fetch().then(function(user) {

                // if there is an error, stop everything and return that
                // ie an error connecting to the database
                // if (err)
                //     return done(err);

                // if the user is found then log them in
                if (user) {
                    done(null, user); // user found, return that user
                } else {
                    // if there is no user, create them
                    var newUser                 = new User();

                    // set all of the user data that we need
                    newUser.twitter_id          = profile.id;
                    newUser.twitter_token       = token;
                    newUser.twitter_handle   = profile.username;
                    newUser.twitter_displayname = profile.displayName;

                    // save our user into the database
                    newUser.save().then(function(newUser) {
                        // if (err) {
                        //     console.log('err', newUser);
                        //     throw err;
                        // }
                        done(null, newUser);
                    });
                }
            });

    });
    }));
};
