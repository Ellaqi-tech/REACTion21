import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {Link} from 'react-router-dom';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div className="custom-form">
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="landing-copy col s12 center-align">
              <h4 style={{fontSize:"35px"}}>
                <b>Hey there,</b> {user.name.split(" ")[0]}
                <p className="slogan">
                  Welcome to REACTion{" "}
                  <span style={{ fontFamily: "monospace" }}>21</span> App 👏
                </p>
                <p className="slogan2">
                With REACTion21 you can create and customize your workouts and keep your training on track!
                To make sure your experience is the best,
                we need to get to know you a little better.</p>
                <p className="slogan2">Let's start now!</p>
              </h4>
              <div style={{margin:"1vw auto"}} className="container-login100-form-btn">
              <Link
                to="/profiles"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="login100-form-btn"
              >
                Create Profile
              </Link>
              </div>
              <div style={{margin:"1vw auto"}} className="container-login100-form-btn">
              <Link
                to="/showprofile"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="login100-form-btn"
              >
                Manage Profile
              </Link>
              </div>


              <div className="container-login100-form-btn">
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  onClick={this.onLogoutClick}
                  className="login100-form-btn"
                  >
                    Logout
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);