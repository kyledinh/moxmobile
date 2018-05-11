import { Sys } from '../../System';
import initialdata from  '../../data/initialdata';

const initialState = {
  isFetching: false,
  error: false
}

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case Sys.FETCHING_PEOPLE:
      return {
        ...state,
        people: [],
        isFetching: true
      }
    case Sys.FETCHING_PEOPLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        people: action.data
      }
    case Sys.FETCHING_PEOPLE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
};

export default people = peopleReducer;
