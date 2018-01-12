import { Sys } from '../../System';
import initialdata from  '../../data/initialdata';

const initialState = {
  teams: initialdata.teams,
  isFetching: false,
  error: false
}

export default function teamsReducer (state = initialState, action) {
  switch (action.type) {
    case Sys.FETCHING_TEAMS:
      return {
        ...state,
        teams: [],
        isFetching: true
      }
    case Sys.FETCHING_TEAMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        teams: action.data
      }
    case Sys.FETCHING_TEAMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}
