import { combineReducers } from 'redux';
import people from './people';
import players from './players';
import teams from './teams';
import matches from './matches';
import news from './news';

const rootReducer = combineReducers({
    people, players, teams, matches, news
})

export default rootReducer;
