import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FormControl, TextField} from '@material-ui/core';
import axios from 'axios';
import {toast} from 'react-toastify';

class SignUpComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phone: '',
            image: '',
            // form controls validation errors
            firstNameError: false,
            firstNameMsg: '',
            lastNameError: false,
            lastNameMsg: '',
            emailError: false,
            emailMsg: '',
            passwordError: false,
            passwordMsg: '',
            phoneError: false,
            phoneMsg: '',
        };
    }

    // form state updater
    formStateUpdate = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    // image uploading handler
    imageUpload = (event) => {
        this.setState({image: event.target.files[0]});
    };

    // performing validation checks
    validationCheck = () => {
        let isError = false;
        const errors = {};

        if (this.state.email === '') {
            isError = true;
            errors.emailMsg = 'It can\'t be empty.';
            errors.emailError = true;
        }

        if (this.state.firstName === '') {
            isError = true;
            errors.firstNameMsg = 'It can\'t be empty.';
            errors.firstNameError = true;
        }

        if (this.state.lastName === '') {
            isError = true;
            errors.lastNameMsg = 'It can\'t be empty.';
            errors.lastNameError = true;
        }

        if (this.state.password.length < 6) {
            isError = true;
            errors.passwordMsg = 'Password must be at lest of 6 characters.';
            errors.passwordError = true;
        }

        if (this.state.phone.length !== 11) {
            isError = true;
            errors.phoneMsg = 'Phone number must have 11 digits.';
            errors.phoneError = true;
        }

        if (isError) {
            this.setState({
                ...errors,
            });
        }

        return isError;
    };

    // submitting form on backend
    submitForm = async (event) => {
        event.preventDefault();

        const valid = this.validationCheck();

        if (!valid) {
            // resetting state
            this.setState({
                firstNameError: false,
                firstNameMsg: '',
                lastNameError: false,
                lastNameMsg: '',
                emailError: false,
                emailMsg: '',
                passwordError: false,
                passwordMsg: '',
                phoneError: false,
                phoneMsg: '',
            });

            try {
                const formData = new FormData();

                const data = {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    password: this.state.password,
                    phone: this.state.phone,
                    image: this.state.image
                };

                for (const field of Object.keys(data)) {
                    formData.append(field, data[field]);
                }

                const isSubmitted = await axios.post('http://localhost:3000/auth/signup', formData);

                if (isSubmitted) {
                    toast.success(isSubmitted.data.message);
                    this.props.history.push('/login');
                }

            } catch (error) {
                toast.error(error.response.data.message);
                console.log(error);
            }

        }

    };

    render() {
        return (
            <div className='container mt-5 w-25'>

                <form onSubmit={this.submitForm}>
                    <FormControl fullWidth>
                        <TextField
                            placeholder="Enter your first name here"
                            variant="outlined"
                            label="First name"
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.formStateUpdate}
                            error={this.state.firstNameError}
                            helperText={this.state.firstNameMsg}
                        />
                    </FormControl>

                    <FormControl fullWidth className='mt-4'>
                        <TextField
                            placeholder="Enter your last name here"
                            variant="outlined"
                            label="Last name"
                            type="text"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.formStateUpdate}
                            error={this.state.lastNameError}
                            helperText={this.state.lastNameMsg}
                        />
                    </FormControl>

                    <FormControl fullWidth className='mt-4'>
                        <TextField
                            placeholder="Enter your email here"
                            variant="outlined"
                            label="Email"
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.formStateUpdate}
                            error={this.state.emailError}
                            helperText={this.state.emailMsg}
                        />
                    </FormControl>

                    <FormControl fullWidth className='mt-4'>
                        <TextField
                            placeholder="Enter your phone number here"
                            variant="outlined"
                            label="Phone"
                            type="number"
                            name="phone"
                            inputProps={{min: 0}}
                            value={this.state.phone}
                            onChange={this.formStateUpdate}
                            error={this.state.phoneError}
                            helperText={this.state.phoneMsg}
                        />
                    </FormControl>

                    <FormControl fullWidth className='mt-4'>
                        <TextField
                            placeholder="Enter your password here"
                            variant="outlined"
                            label="Password"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.formStateUpdate}
                            error={this.state.passwordError}
                            helperText={this.state.passwordMsg}
                        />
                    </FormControl>

                    <FormControl fullWidth className='mt-4'>
                        <label htmlFor='image'> Profile Image </label>
                        <input type='file' accept='image/*' id='image' onChange={this.imageUpload}/>
                    </FormControl>

                    <button type="submit" className="btn btn-primary w-100 mt-4">Sign Up</button>

                    <p className="mt-3">Already have an account?
                        <Link to='/login'> Login </Link>
                    </p>

                </form>

            </div>
        );
    }

}

export default SignUpComponent;
