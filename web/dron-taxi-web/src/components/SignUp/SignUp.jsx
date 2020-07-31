import React from "react";
import './SignUp.css'
import SignUpReduxForm from "../ReduxForms/SignUpReduxForm/SignUpReduxForm";
import {ReactSVG} from "react-svg";
import LogoDronTaxi from "../../resources/icon-svg/LogoDronTaxi.svg";
import * as axios from "axios";
import {connect} from "react-redux";
import {setIsAuth} from "../../state/app-reducer";
import {Redirect} from "react-router";

const SignUp = (props) => {

    let onSubmit = (formData) => {
        console.log(formData.firstName)
        console.log(formData.secondName)
        console.log(formData.lastName)
        console.log(formData.emailData)
        console.log(formData.password)
        console.log(formData.password.length)
        if (formData.password == formData.passwordCheck) {
            axios.post('http://localhost:5000/registr', {firstName: formData.firstName, secondName: formData.secondName, lastName: formData.lastName, emailData: formData.emailData, password: formData.password}).then(res => {
                console.log(res.data)
                if (res.data == false) {
                    localStorage.setItem('id', res.data)
                    props.setIsAuth(`${res.data}`)
                } else {
                    console.log('error')
                }
            })
        } else {
            alert('NO')
        }
    }

    return (props.isAuth == 'false') ?  <Redirect to="/profile" /> : (
        <div className="SignUpContainer">
            <div style={{height: 10, display: "flex", alignItems: "center", paddingTop: 30, paddingLeft: 10}}>
                <ReactSVG src={LogoDronTaxi}/>
                <h3 style={{}}>DRON TAXI</h3>
            </div>
            <div className="SignUp">
                <div className="SignUpWrapper">
                    <h3>Регистрация</h3>
                    <SignUpReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.appReducer.isAuth
})

export default connect(mapStateToProps, {setIsAuth})(SignUp);

