import axios from "axios";

export function usersData() {
    const response = axios.get(`https://fakestoreapi.com/users`)
    return response;
}

export function productsData() {
    const response = axios.get(`https://fakestoreapi.com/products`)
    return response;
}