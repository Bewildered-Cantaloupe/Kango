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
              <button type="submit" className="btn">Sign in</button>
            </div>
          </form>
          <p>or login with:</p>
          <form action="/auth/twitter" method="get">
            <button type="submit" className="tfg-login fa fa-twitter-square fa-3x"></button>
            <button type="submit" className="tfg-login fa fa-facebook-square fa-3x"></button>
            <button type="submit" className="tfg-login fa fa-google-plus-square fa-3x"></button>
          </form>
          <p>Need an account? <Link to="signup">Sign Up</Link></p>
        </div>
        <div className="modal-footer">
        </div>
      </div>
    )
  }
});

module.exports = Login;