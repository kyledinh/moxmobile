import { Sys } from '../../System';
import initialdata from  '../../data/initialdata';

const initialState = {
  players: initialdata.players,
  isFetching: false,
  error: false
}

export default function playersReducer (state = initialState, action) {
  switch (action.type) {
    case Sys.FETCHING_PLAYERS:
      return {
        ...state,
        players: [],
        isFetching: true
      }
    case Sys.FETCHING_PLAYERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        players: action.data
      }
    case Sys.FETCHING_PLAYERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    case Sys.PLAYERS_ADD_NEW:
      return {
        ...state,
        players: state.players.push(action.newPlayer)
      }
    default:
      return state
  }
}
