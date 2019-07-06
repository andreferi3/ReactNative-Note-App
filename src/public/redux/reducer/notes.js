import moment from 'moment';

const initialState = {
    data: [],
    Data: [],
    byCategory: [],
    category_id: null,
    startPage: 1,
    isError: false,
    isLoading: false
}

export default notes = (state = initialState, action) => {
    switch(action.type) {
        // ---- GET NOTES -----
        case 'GET_NOTES_PENDING':
            return {
                ...state,
                isLoadingNotes: true
            }
            break;
        
        case 'GET_NOTES_REJECTED':
            return {
                ...state,
                isLoadingNotes: false,
                isError: true
            }
            break;
        
        case 'GET_NOTES_FULFILLED':
            return {
                ...state,
                isLoadingNotes: false,
                isError: false,
                category_id: null,
                page: action.payload.data,
                data: action.payload.data.Data
            }
            break;

        case 'GET_NOTES_LOADMORE_PENDING':
            return {
                ...state,
                isLoadingFooter: true
            }
            break;
        
        case 'GET_NOTES_LOADMORE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
            break;
        
        case 'GET_NOTES_LOADMORE_FULFILLED':
            console.log(state.data);
            return {
                ...state,
                isLoadingFooter: false,
                isError: false,
                data: state.data.concat(action.payload.data.Data)
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
                category_id: action.payload.data.Data[0],
                totalData: action.payload.data.Total_Data,
                data: action.payload.data.Data,
                page: action.payload.data,
            }
            break;

        case 'GET_NOTES_BY_CATEGORY_LOAD_MORE_PENDING':
            return {
                ...state,
                isLoading: true
            }
            break;
                
        case 'GET_NOTES_BY_CATEGORY_LOAD_MORE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
            break;
        
        case 'GET_NOTES_BY_CATEGORY_LOAD_MORE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                category_id: action.payload.data.Data[0],
                byCategory: action.payload.data.Data,
                data: state.byCategory.concat(action.payload.data.Data),
                page: action.payload.data,
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
            console.log('Data state: ' + action.payload.data.data);
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: state.data.map(data => 
                    (data.id_note === action.payload.data.data.id_note) ? action.payload.data.data : data)
            }

        default:
            return state;
    }
}