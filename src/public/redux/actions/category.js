import axios from 'axios';

let url = 'http://192.168.6.194:8080/category';

export const getCategory = () => {
    return {
        type: 'GET_CATEGORY',
        payload: axios.get(url)
    }
}

export const addCategory = (data) => {
    return {
        type: 'ADD_CATEGORY',
        payload: axios.post(url, data)
    }
}