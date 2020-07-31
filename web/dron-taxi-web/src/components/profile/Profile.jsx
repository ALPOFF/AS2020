import React, {useEffect, useState} from "react";
import filtersvg from "../../resources/icon-svg/filter.svg";
import {ReactSVG} from "react-svg";
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {setIsAuth, setUserDataQ, setUserDataRoleQ} from "../../state/app-reducer";
import LogoDronTaxi from "../../resources/icon-svg/LogoDronTaxi.svg";
import {NavLink} from "react-router-dom";
import './Profile.css'
import clearProfile from './../../resources/img/clear-prof.png'
import ProfileReduxForm from "../ReduxForms/ProfileReduxForm/ProfileReduxForm";

let Profile = (props) => {

    const [tab, setTab] = useState(true)
    const [role, setRole] = useState(null)

    useEffect(() => {
        let user_id = localStorage.getItem('user_id')
        props.setUserDataQ(user_id)
        props.setUserDataRoleQ(user_id)
    },[])

    let a = [{
        id: 0,
        name: "role1",
        sys_name: "rolexxx",
        date: '34.324.34',
        date_f: '34.2343.43',
        func: [{id: 0, sfuncname: 'rrrr'}, {id: 1, sfuncname: 'bbbbb'}]
    }, {
        id: 1,
        name: "role2",
        sys_name: "rolexxx",
        date: '34.324.34',
        date_f: '34.2343.43', func: [{id: 0, sfuncname: 'dfdfd'}, {id: 1, sfuncname: 'ggggg'}]
    }]

    return (props.isAuth !== 'false') ? <Redirect to="/signin"/> : (
        <>
            <div style={{height: '100%', paddingTop: 64, boxSizing: 'border-box'}}>
                <div style={{height: '100%', backgroundColor: '#660066'}}>

                    <div style={{
                        height: 'calc(100% - 50px)',
                        paddingLeft: 30,
                        paddingRight: 30,
                        paddingBottom: 10,
                        paddingTop: 40
                    }}>
                        <h3 style={{paddingTop: 10, paddingBottom: 20}}>Мой профиль</h3>

                        {props.userDataRole[0] != undefined && <div style={{height: 'calc(100% - 124px)'}}>
                            <div style={{height: 'calc(100% - 24px)', backgroundColor: '#800080'}}>
                                <div style={{display: "flex", width: '40%'}}>
                                    <div style={tab ? {backgroundColor: '#800080'} : {backgroundColor: '#991199'}}
                                         className="tab" onClick={() => {
                                        setTab(true)
                                    }}>
                                        <span style={{margin: 10}}>Личные данные</span>
                                    </div>
                                    <div style={tab ? {backgroundColor: '#991199'} : {backgroundColor: '#800080'}}
                                         className="tab" onClick={() => {
                                        setTab(false)
                                    }}>
                                        <span style={{margin: 10}}>Роли</span>
                                    </div>
                                </div>
                                {tab && <div style={{display: "flex", flexDirection: "column", padding: 50}}>
                                    <div style={{display: "flex"}}>
                                        <div style={{display: "flex", flexDirection: "column", marginTop: 10, marginRight: 50}}>
                                            <img src={clearProfile} alt="profilepic" height={140}
                                                 style={{borderRadius: 80, marginBottom: 30}}/>
                                            <button>Обновить</button>
                                        </div>
                                        {props.userData[0] && <ProfileReduxForm/>}
                                    </div>
                                    <button>Сохранить</button>
                                    <button>Отмена</button>
                                </div>}
                                {!tab &&
                                <div style={{display: "flex", flexDirection: "row", flex: 1}}>
                                    <div style={{display: "flex", flexDirection: "column", flex: 1, alignItems: "center"}}>
                                        <div style={{width: '80%'}}>
                                            <h4 style={{paddingLeft: 0}}>Доступные роли</h4>
                                        </div>

                                            <div className="envRoles">

                                                {props.userDataRole.map(r =>
                                                    <div className="roleDiv" onClick={(e) => setRole(e.currentTarget.id)}
                                                          id={r.role_id[0]}><h6>{r.role_name}</h6></div>
                                                )}

                                        </div>
                                     </div>
                                    {props.userDataRole[role] !== undefined ?
                                        <div style={{flex: 1}}>
                                            <div style={{display: "flex", alignItems: "center"}}>
                                                <h5 style={{
                                                    paddingRight: 10,
                                                    paddingBottom: 0
                                                }}>Роль:</h5> <h5
                                                style={{paddingBottom: 0}}>{props.userDataRole[role].role_name}</h5>
                                            </div>
                                            <div>
                                                <div style={{display: "flex"}}>
                                                    <div>
                                                        <h6>Системное имя</h6>
                                                        <input type="text"
                                                               value={props.userDataRole[role].sys_role_name}/>
                                                    </div>
                                                    <div>
                                                        <h6>Наименование</h6>
                                                        <input type="text" value={props.userDataRole[role].role_name}/>
                                                    </div>
                                                </div>
                                                <div style={{display: "flex"}}>
                                                    <div>
                                                        <h6>Дата начала</h6>
                                                        <input type="text" value={props.userDataRole[role].date_start}/>
                                                    </div>
                                                    <div>
                                                        <h6>Дата окончания</h6>
                                                        <input type="text"
                                                               value={props.userDataRole[role].date_finish}/>
                                                    </div>
                                                </div>
                                            </div>

                                            <h5>Доступные функции</h5>
                                            <div>

                                                    <div
                                                    style={{flexDirection: "column"}}>
                                                    <h5>{props.userDataRole[role].sys_func_name}</h5>
                                                </div>
                                            </div>

                                        </div> :

                                        <div style={{flex: 1}}>
                                            <div style={{display: "flex", alignItems: "center"}}>
                                                 <h5 style={{paddingRight: 10, paddingBottom: 0}}>Роль:</h5> <h5
                                                style={{paddingBottom: 0}}>{props.userDataRole[0].role_name}</h5>
                                            </div>
                                            <div>
                                                <div style={{display: "flex"}}>
                                                    <div>
                                                        <h6>Системное имя</h6>
                                                        <input type="text" value={props.userDataRole[0].sys_role_name}/>
                                                    </div>
                                                    <div>
                                                        <h6>Наименование</h6>
                                                        <input type="text" value={props.userDataRole[0].role_name}/>
                                                    </div>
                                                </div>
                                                <div style={{display: "flex"}}>
                                                    <div>
                                                        <h6>Дата начала</h6>
                                                        <input type="text" value={props.userDataRole[0].date_start}/>
                                                    </div>
                                                    <div>
                                                        <h6>Дата окончания</h6>
                                                        <input type="text" value={props.userDataRole[0].date_finish}/>
                                                    </div>
                                                </div>
                                            </div>

                                            <h5>Доступные функции</h5>
                                            <div>
                                                <div
                                                    style={{flexDirection: "column"}}>
                                                    <h5>{props.userDataRole[0].sys_func_name}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>}
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.appReducer.isAuth,
    userData: state.appReducer.userData,
    userDataRole: state.appReducer.userDataRole
})

export default connect(mapStateToProps, {setIsAuth, setUserDataQ, setUserDataRoleQ})(Profile);


