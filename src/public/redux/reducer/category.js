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

        default:
            return state
    }
}