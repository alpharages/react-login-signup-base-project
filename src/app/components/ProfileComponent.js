import React, {Component} from 'react';

class ProfileComponent extends Component {

    render() {
        return (
            <div class='container mt-5 text-center'>

                <h1 class='display-4'> You are successfully logged in. </h1>

                <div class='mt-5'>
                    <button type="button" className="btn btn-primary">Log out</button>
                </div>


            </div>
        );
    }

}

export default ProfileComponent;
