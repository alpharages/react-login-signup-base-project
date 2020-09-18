import React, {Component} from 'react';

class ProfileComponent extends Component {

    logout = () => {
        localStorage.removeItem('token');
        this.props.history.push('/login');
    };

    render() {
        return (
            <div class='container mt-5 text-center'>

                <h1 class='display-4'> You are successfully logged in. </h1>

                <div class='mt-5'>
                    <button type="button" className="btn btn-primary" onClick={this.logout}>Log out</button>
                </div>

            </div>
        );
    }

}

export default ProfileComponent;
