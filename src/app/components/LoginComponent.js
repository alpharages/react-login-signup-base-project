import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';


class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    formInputHandler = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    formSubmission = async (event) => {
        event.preventDefault();

        const isSubmitted = await axios.post('http://localhost:3000/auth/login', this.state);

        if (isSubmitted) {
            const token = isSubmitted.data.data.token;
            localStorage.setItem('token', token);
            toast.success('You are logged in successfully.');
            this.props.history.push('/profile');
        }

    };

    render() {

        return (
            <div class='container mt-5 w-25'>

                <form id='needs-validation' onSubmit={this.formSubmission}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder='Enter your email here'
                               required value={this.state.email} onChange={this.formInputHandler}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" class="form-control" id="password"
                               placeholder='Enter your password here' required minLength={6}
                               value={this.state.password} onChange={this.formInputHandler}/>
                    </div>

                    <div className="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="rememberMe" required/>
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
