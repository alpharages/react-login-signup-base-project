import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginComponent from './app/components/LoginComponent';
import SignUpComponent from './app/components/SignUpComponent';
import ProfileComponent from './app/components/ProfileComponent';
import PrivateRoute from './common/PrivateRoute';

function App() {
    return (
        <div>
            <ToastContainer position="bottom-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={true}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
            />
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={LoginComponent} exact={true}/>
                    <Route path='/login' component={LoginComponent} exact={true}/>
                    <Route path='/signup' component={SignUpComponent} exact={true}/>
                    {/*private route*/}
                    <PrivateRoute path='/profile' component={ProfileComponent} exact={true}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
