const initialState = {
    data: [],
    result: [],
    isLoading: false,
    isError: false
}

export default category = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_CATEGORY_PENDING':
            return {
                isLoading: true
            }
            break;

        case 'GET_CATEGORY_REJECTED':
            return {
                isLoading: false,
                isError: true
            }
            break;

        case 'GET_CATEGORY_FULFILLED':
            return {
                isLoading: false,
                isError: false,
                totalData: action.payload.data.Total_Data,
                data: action.payload.data.result
            }

        /*--- ADD CATEGORY ---*/ 
        case 'ADD_CATEGORY_PENDING':
            return {
                ...state,
                isLoading: true
            }
            break;

        case 'ADD_CATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
            break;

        case 'ADD_CATEGORY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: state.data.concat(action.payload.data.result)
            }
            break;

        case 'DELETE_ALL_NOTES_PENDING':
            return {
                ...state,
                isLoading: true
            }
            break;

        case 'DELETE_ALL_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
            break;

        case 'DELETE_ALL_NOTES_FULFILLED':
            console.log(state.data);
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: state.data.filter(category => action.payload.data.result.id != category.id)
            }
            break;

        default:
            return state
    }
}