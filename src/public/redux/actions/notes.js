import axios from 'axios';

let url = 'http://192.168.6.194:8080/notes';

export const getNotes = () => {
    return {
        type: 'GET_NOTES',
        payload: axios.get(`${url}`)
    }
}

export const getNotesWithParams = (page) => {
    return {
        type: 'GET_NOTES_SEARCH',
        payload: axios.get(`${url}?page${page}`)
    }
}

export const getNotesByCategoryId = (id) => {
    return {
        type: 'GET_NOTES_BY_CATEGORY',
        payload: axios.get(`http://192.168.6.194:8080/notes/category/${id}`)
    }
}

export const addNotes = (data) => {
    return {
        type: 'ADD_NOTES',
        payload: axios.post(url, data)
    }
}

export const editNotes = (id, data) => {
    return {
        type: 'EDIT_NOTES',
        payload: axios.patch(`http://192.168.6.194:8080/notes/${id}`, data)
    }
}

export const deleteNotes = (id) => {
    return {
        type: 'DELETE_NOTES',
        payload: axios.delete(`http://192.168.6.194:8080/notes/${id}`)
    }
}