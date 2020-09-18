import React, {Component} from 'react';

class ProfileComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }


    logout = () => {
        localStorage.removeItem('token');
        this.props.history.push('/login');
    };

    viewName = () => {
    };

    render() {
        return (
            <div class='container mt-5 text-center'>

                <h1 class='display-4'> This is a private page and it can only be accessed if you are logged in. </h1>

                <div class='mt-5'>
                    <button type="button" className="btn btn-primary" onClick={this.logout}>Log out</button>
                </div>

                <div className='mt-5'>
                    <button type="button" className="btn btn-danger" onClick={this.viewName}>View Name</button>
                </div>

                <h1 className='display-4'> {this.state.name} </h1>

            </div>
        );
    }

}

export default ProfileComponent;
