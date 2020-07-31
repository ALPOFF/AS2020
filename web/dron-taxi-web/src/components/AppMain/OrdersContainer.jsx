import {ReactSVG} from "react-svg";
import filtersvg from "../../resources/icon-svg/filter.svg";
import OrderShedule from "./OrderShedule/OrderShedule";
import React, {useEffect} from "react";
import './MainApp.css'
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {setCurOrders} from "../../state/app-reducer";

let OrdersContainer = (props) => {
    let aaaa = [{
        froms: 'Moscow',
        to: 'Sarov',
        date: 'Wed Jul 29 2020 16:52:31 GMT+0300 (Москва, стандартное время)',
        price: '123.3'
    }]

    useEffect(() => {
        let user_id = localStorage.getItem('user_id')
        props.setCurOrders(user_id)
    },[])

    return  (
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

        <div style={{display: 'flex'}}>
            <div className="MyOrders">
                <h3>Мои заказы</h3>

                <div className="OrderTop">
                    <ReactSVG src={filtersvg}/>
                    <input type="text" placeholder="Место отправления"/>
                    <input type="text" placeholder="Место назначения"/>
                </div>
                <div>
                    <div style={{
                        display: "flex",
                        width: '100%',
                        color: '#CEC8C8',
                        fontSize: 12,
                        fontWeight: "bold",
                        justifyContent: "space-around"
                    }}>
                        <span style={{padding: 10, width: '100%', textAlign: 'center'}}>Место отправления</span>
                        <span style={{padding: 10, width: '100%', textAlign: 'center'}}>Место прибытия</span>
                        <span style={{padding: 10, width: '100%', textAlign: 'center'}}>Время заказа</span>
                        <span style={{padding: 10, width: '100%', textAlign: 'center'}}>Стоимость</span>
                        <span style={{padding: 10, width: '100%', textAlign: 'center'}}></span>
                    </div>
                    {props.orders && <OrderShedule aaaa={props.orders}/>}
                </div>
            </div>
            <div className="NewOrder">
                <h3>Новый заказ</h3>
                <div className="inputBlock">
                    <div style={{paddingBottom: 20}}>
                        <input type="text" placeholder="Откуда"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Куда"/>
                    </div>
                </div>
                <h6>Транспорт</h6>
                <select name="" id="">
                    <option value="0">Эконом</option>
                    <option value="1">Бизнес</option>
                    <option value="2">Премиум</option>
                </select>

                <button>Поехали</button>
            </div>
        </div>
                    </div></div></div></>
    )
}

const mapStateToProps = (state) => ({
    orders: state.appReducer.orders
})

export default connect(mapStateToProps, {setCurOrders})(OrdersContainer);
