import React from "react";
import {Field, reduxForm} from "redux-form";
import './SignInReduxForm.css'

const SignInForm = (props) => {
    let xxx = React.createRef();
    return <form onSubmit={props.handleSubmit}>
        <div className="field">
            <h6>Логин</h6>
            <Field className={"input"}  value={'sdffffffffff'} placeholder={"Email"} name={"email"} component={"input"} autoComplete="on"/>
        </div>
        <div className="field">
            <h6>Пароль</h6>
            <Field className={"input"} type={"password"} placeholder={"Password"} name={"password"}
                   component={"input"} autoComplete="on"/>
        </div>
        <div className="fieldCheck">
            <div style={{display: "flex", alignItems: "center"}}>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>
                <h6>Запомнить</h6>
            </div>
            <button>ВОЙТИ</button>
        </div>
    </form>
};

const SignInReduxForm = reduxForm({
    form: 'signin'
})(SignInForm);

export default SignInReduxForm
