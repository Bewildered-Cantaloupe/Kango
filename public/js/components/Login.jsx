var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;

var Login = React.createClass({
  render: function() {
    return (
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h3 className="modal-title">Sign In to Kango</h3>
        </div>
        <div className="modal-body">
          <form className="form-horizontal" action="/login" method="post">
            <div className="form-group">
              <input type="email" className="form-control login-input" id="inputEmail3" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control login-input" id="inputPassword3" placeholder="Password" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-default">Sign in</button>
            </div>
          </form>
          <p>Need an account? <Link to="signup">Sign Up</Link></p>
        </div>
      </div>
    )
  }
});

module.exports = Login;