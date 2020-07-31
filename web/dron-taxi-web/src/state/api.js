import * as axios from "axios";

export const getCurUsD = (currentUserId) => {
    return axios.post(`http://localhost:5000/user`, {currentUserId: currentUserId})
}

export const getCurUsRoleD = (currentUserId) => {
    return axios.post(`http://localhost:5000/role`, {currentUserId: currentUserId})
}

export const getOrders = (currentUserId) => {
    return axios.post(`http://localhost:5000/orders`, {currentUserId: currentUserId})
}
