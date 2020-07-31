import React, {useEffect} from 'react';
import './SignIn.css'
import {NavLink} from "react-router-dom";
import SignInReduxForm from "../ReduxForms/SignInReduxForm/SignInReduxForm";
import LogoDronTaxi from '../../resources/icon-svg/LogoDronTaxi.svg'
import {ReactSVG} from 'react-svg'
 import {connect} from "react-redux";
import * as axios from "axios";
import {Redirect} from "react-router";
import {setIsAuth, setUserDataQ} from "../../state/app-reducer";

const SignIn = (props) => {

    let onSubmit = (formData) => {
        console.log(formData.email.length)
        axios.post('http://localhost:5000/auth', {email: formData.email, password: formData.password}).then(res => {
            console.log(res.data)
            if (res.data.status == false) {
                localStorage.setItem('id', `${res.data.status}`)
                localStorage.setItem('user_id', `${res.data.id}`)
                props.setIsAuth(`${res.data.status}`)
            } else {
                console.log('error')
            }
        })
    }

    return (props.isAuth == 'false') ?  <Redirect to="/profile" /> : (
        <div className="SignIn">
            <div style={{height: 10, display: "flex", alignItems: "center", paddingTop: 30, paddingLeft: 10}}>
                <ReactSVG src={LogoDronTaxi}/>
                <h3 style={{}}>DRON TAXI</h3>
            </div>
            <div className="SignIn">

                <div className="SignInWrapper">
                    <h5>АВТОРИЗАЦИЯ</h5>
                    <SignInReduxForm onSubmit={onSubmit}/>
                    <div>
                        <NavLink to="/signup">
                            <button>Регистрация</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.appReducer.isAuth
})

export default connect(mapStateToProps, {setIsAuth, setUserDataQ})(SignIn);
