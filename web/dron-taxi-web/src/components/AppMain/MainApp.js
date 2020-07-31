import React from "react";
import OrderShedule from "./OrderShedule/OrderShedule";
import './MainApp.css'
import filtersvg from "../../resources/icon-svg/filter.svg";
import {ReactSVG} from "react-svg";
import {Redirect, withRouter} from "react-router";
import {connect} from "react-redux";
import {setIsAuth} from "../../state/app-reducer";
import profileicon from "../../resources/icon-svg/profile.svg";
import manageuser from "../../resources/icon-svg/manag-user.svg";
import LogoDronTaxi from "../../resources/icon-svg/LogoDronTaxi.svg";
import exit from "../../resources/icon-svg/exit.svg";

import OrdersContainer from "./OrdersContainer";
import Profile from "../profile/Profile";
import {NavLink} from "react-router-dom";

class MainApp extends React.Component {
    render() {
        const { match, location, history } = this.props;

        return (this.props.isAuth !== 'false') ? <Redirect to="/signin"/> : (

                <div style={{flex: 1}}>
                    <div style={{display: "flex", alignItems: "center", paddingTop: 10, paddingLeft: 10}}>
                        <ReactSVG src={LogoDronTaxi}/>
                        <h3 style={{paddingLeft: 15}}>DRON TAXI</h3>
                    </div>
                    <div className="LeftBar">
                        <div className="MenuElement">
                            <NavLink to="/profile">
                                <div style={{display: 'flex', alignItems: 'center', width: 240, height: 40}}>
                                    <ReactSVG src={profileicon}/>
                                    <h6>Профиль</h6>
                                </div>
                            </NavLink>
                            <NavLink to="/orders">
                                <div style={{display: 'flex', alignItems: 'center', width: 240, height: 40}}>
                                    <ReactSVG src={manageuser}/>
                                    <h6>Мои заказы</h6>
                                </div>
                            </NavLink>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            justifyContent: 'flex-end'
                        }}>
                            <a onClick={() => localStorage.setItem('id', 'true')} href='/signin'>
                                <div style={{display: 'flex', width: 240}}>
                                    <ReactSVG src={exit}/>
                                    <h6 style={{paddingLeft: 30}}>Выход</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>


        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.appReducer.isAuth
})

export default withRouter(connect(mapStateToProps, {setIsAuth})(MainApp));


