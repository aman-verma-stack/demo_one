import { FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LIST_FALIURE } from '../Home/ListTypes';

export const fetchListRequest = () => {
    return {
        type: FETCH_LIST_REQUEST
    }
}

export const fetchListSuccess = data => {
    return {
        type: FETCH_LIST_SUCCESS,
        payload: data
    }
}

export const fetchListFaliure = error => {
    return {
        type: FETCH_LIST_FALIURE,
        payload: error
    }
}