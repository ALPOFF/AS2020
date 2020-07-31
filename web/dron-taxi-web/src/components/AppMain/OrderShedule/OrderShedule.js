import React from "react";
import {formatDate} from "../../../formatDate";
import './OrderShedule.css'
import {formatOnlyDate} from "../../../formatOnlyDate";

const OrderShedule = (props) => {
    return (
        <>
            <div className="orderSheduleContainer">
                {props.aaaa.map(i => <div style={{display: "flex", width: '100%', justifyContent: "space-around"}}>
                    <div className="element">{i.place_from}</div>
                    <div className="borderElement">{i.place_to}</div>
                    <div className="element">{formatOnlyDate(new Date(i.order_time))}</div>
                    <div className="borderElement">{i.price} р.</div>
                    <div className="element"></div>
                </div>)}
            </div>
        </>
    )
}

export default OrderShedule;
