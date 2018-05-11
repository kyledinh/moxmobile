import { combineReducers } from 'redux';
import matches from './matchesReducer';
import news from './newsReducer';
import people from './peopleReducer';
import players from './playersReducer';
import teams from './teamsReducer';

const rootReducer = combineReducers({
  people, players, teams, matches, news
})

export default rootReducer;
