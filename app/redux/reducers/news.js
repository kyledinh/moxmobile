import { Sys } from '../../System';
import initialdata from  '../../data/initialdata';

const initialState = {
    news: initialdata.news,
    isFetching: false,
    error: false
}

export default function newsReducer (state = initialState, action) {
    switch (action.type) {
        case Sys.FETCHING_NEWS:
            return {
                ...state,
                news: [],
                isFetching: true
            }
        case Sys.FETCHING_NEWS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                news: action.data
            }
        case Sys.FETCHING_NEWS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}
