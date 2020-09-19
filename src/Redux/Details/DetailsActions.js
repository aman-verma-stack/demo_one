import { FETCH_DETAILS_REQUEST, FETCH_DETAILS_SUCCESS, FETCH_DETAILS_FALIURE } from './DetailsTypes'

export const fetchDetailsRequest = () => {
    return {
        type: FETCH_DETAILS_REQUEST
    }
}

export const fetchDetailsSuccess = data => {
    return {
        type: FETCH_DETAILS_SUCCESS,
        payload: data
    }
}

export const fetchDetailsFaliure = error => {
    return {
        type: FETCH_DETAILS_FALIURE,
        payload: error
    }
}