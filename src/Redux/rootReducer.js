import { combineReducers } from 'redux';
import listReducer from '../Redux/Home/ListReducer';
import detailsReducer from '../Redux/Details/DetailsReducer'

const rootReducer = combineReducers({
    data: listReducer,
    details: detailsReducer,
})


export default rootReducer;