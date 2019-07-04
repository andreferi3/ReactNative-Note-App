import moment from 'moment';

const initialState = {
    data: [],
    Data: [],
    isError: false,
    isLoading: false
}

export default notes = (state = initialState, action) => {
    switch(action.type) {
        // ---- GET NOTES -----
        case 'GET_NOTES_PENDING':
            return {
                ...state,
                isLoading: true
            }
            break;
        
        case 'GET_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
            break;
        
        case 'GET_NOTES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                page: action.payload.data.Page_Count,
                data: action.payload.data.Data
            }
            break;

        case 'GET_NOTES_SEARCH_PENDING':
            return {
                ...state,
                isLoading: true
            }
            break;
        
        case 'GET_NOTES_SEARCH_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
            break;
        
        case 'GET_NOTES_SEARCH_FULFILLED':
            console.log(state.data);
            return {
                ...state,
                isLoading: false,
                isError: false,
                page: action.payload.data.Page_Count,
                data: action.payload.data.Data,
                nextData: state.data.concat(action.payload.data.Data)
            }
            break;

        case 'GET_NOTES_BY_CATEGORY_PENDING':
            return {
                ...state,
                isLoading: true
            }
            break;
                
        case 'GET_NOTES_BY_CATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
            break;
        
        case 'GET_NOTES_BY_CATEGORY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }
            break;

        case 'ADD_NOTES_PENDING':
            return {
                ...state,
                isLoading: true
            }
            break;
        
        case 'ADD_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
            break;
        
        case 'ADD_NOTES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: [action.payload.data.data].concat(state.data)
            }
            break;
            
        case 'DELETE_NOTES_PENDING':
            return {
                ...state,
                isLoading: true
            }
            break;
            
        case 'DELETE_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
            break;
        
        case 'DELETE_NOTES_FULFILLED':
            console.log('State Data :');
            console.log(state.data);
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: state.data.filter(note => action.payload.data.result.id != note.id_note)
            }
            break;

        case 'EDIT_NOTES_PENDING':
            return {
                ...state,
                isLoading: true
            }
            break;
                
        case 'EDIT_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
            break;
        
        case 'EDIT_NOTES_FULFILLED':
            console.log('Data state: ' + state.data);
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: state.data.map(data => 
                    (data.id_note == action.payload.data.data.id_note) ? action.payload.data.data : data)
            }

        default:
            return state;
    }
}