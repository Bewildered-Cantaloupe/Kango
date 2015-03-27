var Reflux = require('reflux');
var $ = require('jquery');
var ShelterActions = require('../actions/shelterActions.jsx');
// require action here.

var ShelterStore = Reflux.createStore({
  listenables: ShelterActions,
  onLoad: function(callback){
    $.ajax({
      type: "GET",
      url: '/shelters',
    }).done(function(data) {
      callback(data);
    });
  },
  onCreate: function(shelter) {
    shelters.push(shelter);

    this.trigger(shelters);
  },
  toggle: function(e, toggled, job){
    console.log(e, toggled, job);

  },
});

module.exports = ShelterStore;