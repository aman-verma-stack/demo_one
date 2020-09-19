import { FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LIST_FALIURE } from '../Home/ListTypes';

const initialState = {
    loading: true,
    list: [],
    error: '',
}

const Reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_LIST_REQUEST : return{
            ...state,
            loading: true
        }
        case FETCH_LIST_SUCCESS : return{
            loading: false,
            list: action.payload,
            error: ''
        }
        case FETCH_LIST_FALIURE : return{
            loading: false,
            list: [],
            error: action.payload
        }
        default: return state
    }
}

export default Reducer;