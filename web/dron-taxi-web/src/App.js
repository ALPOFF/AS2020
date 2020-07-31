import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Router, Switch} from "react-router";
import LoginContainer from "./components/LoginContainer/LoginContainer";
import SignUp from "./components/SignUp/SignUp";
import MainApp from "./components/AppMain/MainApp";
import Profile from "./components/profile/Profile";
import OrdersContainer from "./components/AppMain/OrdersContainer";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path='/signin' render={() => <LoginContainer/>}/>
                <Route path='/signup' render={() => <SignUp/>}/>
                <div className="MainContainer">
                    <Route path='/' render={() => <MainApp/>}/>
                    <div style={{flex: 5}}>
                        <Route path='/profile' render={() => <Profile/>}/>
                        <Route path='/orders' render={() => <OrdersContainer/>}/>
                    </div>
                </div>
            </Switch>
        </div>
    );
}

export default App;
