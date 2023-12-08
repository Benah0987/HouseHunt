import React from 'react'
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="row">
      <div className="col-md-6 mx-auto p-0">
        <div className="card">
          <div className="login-box">
            <div className="login-snip">
              <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
              <Link to="/login" className="tab">
                Login
              </Link>
              <input id="tab-2" type="radio" name="tab" className="sign-up" />
              <Link to="/signup" className="tab">
                Sign Up
              </Link>
              <div className="login-space">
                <div className="login">
                  <div className="group">
                    <label htmlFor="user" className="label">
                      Username
                    </label>
                    <input id="user" type="text" className="input" placeholder="Enter your username" />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">
                      Password
                    </label>
                    <input id="pass" type="password" className="input" data-type="password" placeholder="Enter your password" />
                  </div>
                  <div className="group">
                    <input id="check" type="checkbox" className="check" checked />
                    <label htmlFor="check">
                      <span className="icon"></span> Keep me Signed in
                    </label>
                  </div>
                  <div className="group">
                    <input type="submit" className="button" value="Sign In" />
                  </div>
                  <div className="hr"></div>
                  <div className="foot">
                    <a href="#">Forgot Password?</a>
                  </div>
                </div>
                <div className="sign-up-form">
                  <div className="group">
                    <label htmlFor="user" className="label">
                      Username
                    </label>
                    <input id="user" type="text" className="input" placeholder="Create your Username" />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">
                      Password
                    </label>
                    <input id="pass" type="password" className="input" data-type="password" placeholder="Create your password" />
                  </div>
                 
                  <div className="group">
                    <label htmlFor="pass" className="label"a>
                      Email Address
                    </label>
                    <input id="pass" type="text" className="input" placeholder="Enter your email address" />
                  </div>
                  <div className="group">
                    <input type="submit" className="button" value="Sign Up" />
                  </div>
                  <div className="hr"></div>
                  <div className="foot">
                    <label htmlFor="tab-1">Already Member?</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp