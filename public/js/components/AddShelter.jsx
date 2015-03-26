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
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h3 className="modal-title">Shelter Registration</h3>
        </div>
        <div className="modal-body">
          <form className="form-horizontal" action="/shelter" method="post">
            <div className="form-group">
              <label className="col-sm-2 control-label">Shelter's name?</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="name" placeholder="Shelter name"/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Shelter's image URL </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="imageUrl" placeholder="http://" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">address</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="address1" placeholder="Line 1"/>
                <input type="text" className="form-control" name="address2" placeholder="Line 2" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">City</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="city" placeholder="City"/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">State</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="state" placeholder="State"/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Zip code</label>
              <div className="col-sm-10">
                <input type="int" className="form-control" name="zip" placeholder="Zip Code"/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Telephone</label>
              <div className="col-sm-10">
                <input type="int" className="form-control" name="telephone" placeholder="Telephone"/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Email</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="email" placeholder="Email"/>
              </div>
            </div>          
            <div className="form-group">
              <label className="col-sm-2 control-label">Fundraising goal </label>
              <div className="col-sm-10">
                <input type="int" className="form-control" name="goal" placeholder="Goal"/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Brief description of the services</label>
              <div className="col-sm-10">
                <textarea className="form-control" rows="5">Your description here</textarea>
              </div>
            </div>

            <button type="submit" className="btn btn-warning btn-lg">Signup</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = AddShelter;
