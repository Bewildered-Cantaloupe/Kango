var nconf = require('nconf');
 
nconf.file('settings.json');
nconf.env();

var consumerKey = nconf.get('consumerKey');
var consumerSecret = nconf.get('consumerSecret');
var callbackURL = nconf.get('callbackURL');

module.exports = {

    'twitterAuth' : {
        'consumerKey'       : consumerKey,
        'consumerSecret'    : consumerSecret,
        'callbackURL'       : callbackURL
    }
};

