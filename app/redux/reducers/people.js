import { Sys } from '../../System';

const initialState = {
  people: [],
  isFetching: false,
  error: false
}

export default function peopleReducer (state = initialState, action) {
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
}
