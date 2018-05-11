import { Sys } from '../../System';
import initialdata from  '../../data/initialdata';

const initialState = {
  matches: initialdata.matches,
  isFetching: false,
  error: false
}

const matchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Sys.FETCHING_MATCHES:
      return {
        ...state,
        matches: [],
        isFetching: true
      }
    case Sys.FETCHING_MATCHES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        matches: action.data
      }
    case Sys.FETCHING_MATCHES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
};

export default matches = matchesReducer;
