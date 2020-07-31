import {getCurUsD, getCurUsRoleD, getOrders} from "./api";

const AUTH = 'AUTH';
const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_DATA_ROLE = 'SET_USER_DATA_ROLE';
const SET_ORDERS = 'SET_ORDERS';

let ath;
(localStorage.getItem('id') == null) ? (ath = true) : ath = localStorage.getItem('id')

let initialState = {
    isAuth: ath,
    userData: [],
    userDataRole: [],
    orders: []
};

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            };
        case SET_USER_DATA:
            return {
                ...state,
                userData: action.userData
            };
        case SET_USER_DATA_ROLE:
            return {
                ...state,
                userDataRole: action.userDataRole
            };
        case SET_ORDERS:
            return {
                ...state,
                orders: action.orders
            };
        default:
            return state
    }
};

export const setIsAuth = (isAuth) => {
    return {
        type: AUTH,
        isAuth
    }
};

export const setUserData = (userData) => {
    return {
        type: SET_USER_DATA,
        userData
    }
};

export const setUserDataRole = (userDataRole) => {
    return {
        type: SET_USER_DATA_ROLE,
        userDataRole
    }
};

export const setOrders = (orders) => {
    return {
        type: SET_ORDERS,
        orders
    }
};

export const setUserDataQ = (currentUserId) => async (dispatch) => {
    let response = await getCurUsD(currentUserId);
    dispatch(setUserData(response.data))
}

export const setUserDataRoleQ = (currentUserId) => async (dispatch) => {
    let response = await getCurUsRoleD(currentUserId);
    dispatch(setUserDataRole(response.data))
}

export const setCurOrders = (currentUserId) => async (dispatch) => {
    let response = await getOrders(currentUserId);
    dispatch(setOrders(response.data))
}

export default appReducer;
