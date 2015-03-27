var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;

var Donation = React.createClass({
  render: function() {
    return (
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h3 className="modal-title">Payment Information</h3>
        </div>
        <div className="modal-body">
          <form className="form-horizontal" action="/donate" method="post">
            <div className="form-group">
              <label className="col-sm-2 control-label">Full Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="fullName" placeholder="Your full name"/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Credit Card</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="creditCard" placeholder="Credit Card" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Exp. Date</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="expDate" placeholder="City"/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Amount</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="amount" placeholder="$"/>
              </div>
            </div>
            <button type="submit" className="btn btn-warning btn-lg">Signup</button>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = Donation;