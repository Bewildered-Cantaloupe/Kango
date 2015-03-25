var React = require('react');

var AddShelter = React.createClass({
  getInitialState: function() {
    return {
      newShelter: ''
    }
  },
  updateNewShelter: function(e) {
    this.setState({
      newShelter: e.target.value
    });
  },
  handleAddNew: function(e) {
    this.props.addNew(this.state.newShelter);
    this.setState({
      newShelter: ''
    });
  },
  render: function() {
     return (
      <div className="modal-popup modal-content">
        <h2 className="modal-popup-header">Register your shelter to be featured on our site</h2>
        <form action="/shelter" method="post">
          <div class="form-group">
            <label>What is your shelter's name?  </label>
            <input type="text" class="form-control" name="sheltername" />
          </div>
          <div class="form-group">
            <label>Please provide the url of an image you'd like associated with your profile. </label>
            <input type="text" class="form-control" name="imageurl_url" />
          </div>
          <div class="form-group">
            <label>What is your address? (Line one) </label>
            <input type="text" class="form-control" name="address_1" />
          </div>
          <div class="form-group">
            <label>What is your address? (Line two) </label>
            <input type="text" class="form-control" name="address_2" />
          </div>
          <div class="form-group">
            <label>State?</label>
            <input type="text" class="form-control" name="state" />
          </div>
          <div class="form-group">
            <label>Zip code?</label>
            <input type="int" class="form-control" name="zip" />
          </div>
          <div class="form-group">
            <label>Telephone</label>
            <input type="int" class="form-control" name="phone" />
          </div>
          <div class="form-group">
            <label>Best contact email?</label>
            <input type="text" class="form-control" name="email" />
          </div>          
          <div class="form-group">
            <label>Please provide a brief description of the services you provide and the nature of your campaign.</label>
            <input type="text" class="form-control" name="bio" />
          </div>
          <div class="form-group">
            <label> How much are you trying to raise? </label>
            <input type="int" class="form-control" name="goal" />
          </div>

          <button type="submit" class="btn btn-warning btn-lg">Signup</button>
        </form>
      </div>
    );
  }
});

module.exports = AddShelter;
