import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginComponent from './app/components/LoginComponent';
import SignUpComponent from './app/components/SignUpComponent';
import ProfileComponent from './app/components/ProfileComponent';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={LoginComponent} exact={true}/>
                    <Route path='/login' component={LoginComponent} exact={true}/>
                    <Route path='/signup' component={SignUpComponent} exact={true}/>
                    {/*protected route*/}
                    <Route path='/profile' component={ProfileComponent} exact={true}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
