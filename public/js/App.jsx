/** @jsx React.DOM */
var React = require('react');
var Main = require('./components/Main.jsx');
var ShelterStore = require('./stores/ShelterStore.jsx');
var ShelterActions = require('./actions/shelterActions.jsx');
var ShowList = require('./components/ShowList.jsx');
var Shelters = require('./components/Shelters.jsx');
var NotFound = require('./components/NotFound.jsx');
var NavBarDefault = require('./components/NavBarDefault.jsx');
var Login = require('./components/Login.jsx');
var Signup = require('./components/Signup.jsx');
var AddShelter = require('./components/AddShelter.jsx');
var TwitterLogin = require('./components/TwitterLogin.jsx');
var Shelter = require('./components/Shelter.jsx');
 
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var DefaultRoute = Route.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var NotFoundRoute = Router.NotFoundRoute;

var App = React.createClass({
  getInitialState: function() {
    return {
      nearbyShelters: []
    };
  },
  componentWillMount: function(){
    ShelterActions.load(function(data){
      this.setState({
        nearbyShelters: data
      });
    }.bind(this));
  },
  render: function() {
    return (
      <div>
        <div className="main-wrapper">
          <RouteHandler shelters={this.state.nearbyShelters}/>
        </div>
      </div>
    ) 
  }
});

var routes = (
  <Route name="app" handler={App}>
    <Route name="main" path="/" handler={Main} />
    <Route name="fund-shelters" handler={Shelters} />
    <Route name="signup" handler={AddShelter} />
    <Route name="twitter" handler={TwitterLogin} />
    <Route name="shelter" path="/shelter/:sheltername" handler={Shelter} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

Router.run(routes,function (Handler) {
  React.render(<Handler/>, document.getElementById('content'));
});

