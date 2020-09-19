import axios from 'axios'
import { fetchDetailsRequest, fetchDetailsSuccess, fetchDetailsFaliure } from '../../Redux/Details/DetailsActions'

export const fetchDetailsAPI = (searchParams) => {
    var id = searchParams.id;
    let url = 'http://jsonplaceholder.typicode.com/users/'+id

    const config = {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        }
    };

    return (dispatch) => {
        dispatch(fetchDetailsRequest)
        axios.get(url, searchParams, config)
            .then(response => {
                const data = response.data
                dispatch(fetchDetailsSuccess(data))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchDetailsFaliure(errorMsg))
            })
    }
}