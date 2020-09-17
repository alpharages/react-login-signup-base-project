import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class LoginComponent extends Component {

    render() {
        return (
            <div class='container mt-5 w-25'>

                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder='Enter your email here'/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" class="form-control" id="password"
                               placeholder='Enter your password here'/>
                    </div>

                    <div className="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="rememberMe"/>
                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                    </div>

                    <button type="submit" class="btn btn-primary w-100">Login</button>

                    <p class="mt-3">New to the website?
                        <Link to='/signup'> Sign up </Link>
                    </p>

                </form>

            </div>
        );
    }

}

export default LoginComponent;
