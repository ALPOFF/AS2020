import React, {useEffect, useState} from "react";
import {Field, reduxForm} from "redux-form";
import './ProfileReduxForm.css'
import {connect} from "react-redux";

const ProfileForm = (props) => {
   const [check, setCheck] = useState([])

    useEffect(() => {
        props.userData[0].gender ?
        setCheck([true, false]) :  setCheck([false, true])
    },[])

    return <form onSubmit={props.handleSubmit}>
        <div style={{display: "flex"}}>
            <div>
                <div className="field">
                    <h6>Фамилия *</h6>
                    <Field className={"input"} type={"text"} placeholder={props.userData[0] != undefined ? props.userData[0].second_name : "Введите фамилию"} name={"secondName"} component={"input"}
                           autoComplete="on"/>
                </div>
                <div className="field">
                    <h6>Имя *</h6>
                    <Field className={"input"} type={"text"} placeholder={props.userData[0] != undefined ? props.userData[0].first_name : "Введите имя"} name={"firstName"}
                           component={"input"} autoComplete="on"/>
                </div>
                <div className="field">
                    <h6>Отчество *</h6>
                    <Field className={"input"} type={"text"} placeholder={props.userData[0] != undefined ? props.userData[0].last_name : "Введите отчество"} name={"lastName"}
                           component={"input"} autoComplete="on"/>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                    <div className="fieldDate" style={{flex: 1}}>
                        <h6>Дата рождения *</h6>
                        <Field className={"input"} type={"date"} placeholder={props.userData[0] != undefined ? props.userData[0].birthday : "Введите дату рождения"} name={"birthday"}
                               component={"input"} autoComplete="on"/>
                    </div>
                    <div className="fieldCheck" style={{display: "flex", width: 140, height: 40, alignItems: "center"}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <h6  style={{paddingLeft: 5}} htmlFor="">Пол</h6>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <Field component={"input"} name={"male"} type={"checkbox"} checked={check[0]}/>
                                <h6 htmlFor="">М</h6>
                                <Field component={"input"} name={"female"} type={"checkbox"} checked={check[1]}/>
                                <h6 htmlFor="">Ж</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="field">
                    <h6>Email *</h6>
                    <Field className={"input"} type={"email"} placeholder={props.userData[0] != undefined ? props.userData[0].login : "Введите email"} name={"email"}
                           component={"input"} autocomplete="on"/>
                </div>
                <div className="field">
                    <h6>Телефон</h6>
                    <Field className={"input"} type={"phone"} placeholder={props.userData[0] != undefined ? props.userData[0].phone : "Введите номер ( формат 9-999-999-9999 )"}
                           name={"phone"}
                           component={"input"} autocomplete="on"/>
                </div>
                <div className="field">
                    <h6>Пароль *</h6>
                    <Field className={"input"} type={"password"} placeholder={"Введите пароль для изменений"} name={"password"}
                           component={"input"} autocomplete="on"/>
                </div>
                <div className="field">
                    <h6>Подтвердите пароль *</h6>
                    <Field className={"input"} type={"password"} placeholder={"Подтвердите пароль для изменений"} name={"passwordCheck"}
                           component={"input"} autocomplete="on"/>
                </div>
            </div>
        </div>
    </form>
};

const ProfileReduxForm = reduxForm({
    form: 'profile'
})(ProfileForm);

const mapStateToProps = (state) => ({
    userData: state.appReducer.userData
})

export default connect(mapStateToProps,{})(ProfileReduxForm)
