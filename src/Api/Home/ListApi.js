import axios from 'axios'
import { fetchListRequest, fetchListSuccess, fetchListFaliure } from '../../Redux/Home/ListActions'

export const fetchListAPI = (searchParams) => {
    let url = 'https://jsonplaceholder.typicode.com/albums/'

    const config = {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        }
    };

    return (dispatch) => {
        dispatch(fetchListRequest)
        axios.get(url, searchParams, config)
            .then(response => {
                const data = response.data
                dispatch(fetchListSuccess(data))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchListFaliure(errorMsg))
            })
    }
}