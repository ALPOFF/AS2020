import React from "react";
import {Field, reduxForm} from "redux-form";
import {NavLink} from "react-router-dom";
import './SignUpReduxForm.css'

const SignUpForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className="field">
            <h6>Фамилия *</h6>
            <Field className={"input"} placeholder={"Сахаров"} name={"firstName"}
                   component={"input"}/>
        </div>
        <div className="field">
            <h6>Имя *</h6>
            <Field className={"input"} placeholder={"Андрей"} name={"secondName"}
                   component={"input"}/>
        </div>
        <div className="field">
            <h6>Отчество *</h6>
            <Field className={"input"} placeholder={"Геннадьевич"} name={"lastName"} component={"input"}/>
        </div>
        <div className="field">
            <h6>Email *</h6>
            <Field className={"input"} placeholder={"andrey-saxarov@mail.ru"} name={"emailData"} component={"input"}/>
        </div>
        <div className="field">
            <h6>Пароль *</h6>
            <Field className={"input"} type={"password"} placeholder={""} name={"password"}
                   component={"input"}/>
        </div>
        <div className="field">
            <h6>Подтвердить пароль *</h6>
            <Field className={"input"} type={"passwordCheck"} placeholder={""} name={"passwordCheck"}
                   component={"input"}/>
        </div>
        <div className="signUpIconWrapper">
            <button>Регистрация</button>
        </div>
    </form>
};

const SignUpReduxForm = reduxForm({
    form: 'signup'
})(SignUpForm);

export default SignUpReduxForm
