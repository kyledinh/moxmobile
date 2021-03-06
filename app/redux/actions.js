import { Sys } from '../System';
import initialdata from  '../data/initialdata';

export const fetchPlayersFromAPI = () => {
  return (dispatch) => {
    dispatch(getPlayers());
    fetch('https://maalbox.com/washer?name=MOX_RFN&wins=MOX_RI_100&points=MOX_RI_1000',
      { method: "POST",
        body:  JSON.stringify(initialdata.players)
      })
      .then(data => data.json())
      .then(jsarr => {
        console.log('json:', jsarr)
        dispatch(getPlayersSuccess(jsarr))
      })
      .catch(err => dispatch(getPlayersFailure(err)));
  }
}

export const getPlayers = () => ({
  type: Sys.FETCHING_PLAYERS
});

export const addPlayer = (data) => ({
  type: Sys.PLAYER_ADD_NEW,
  data
});

export const getPlayersSuccess = (data) => ({
  type: Sys.FETCHING_PLAYERS_SUCCESS,
  data,
});

export const getPlayersFailure = () => ({
  type: Sys.FETCHING_PLAYERS_FAILURE
});

// TEAMS
export const fetchTeamsFromAPI = () => {
  return (dispatch) => {
    dispatch(getTeams());
    dispatch(getTeamsSuccess(initaldata.teams));
  }
}

export const getTeams = () => ({
  type: Sys.FETCHING_TEAMS
});

export const getTeamsSuccess = (data) => ({
  type: Sys.FETCHING_TEAMS_SUCCESS,
  data,
});

export const getTeamsFailure = () => ({
  type: Sys.FETCHING_TEAMS_FAILURE
});

// MATCHES
export const fetchMatchesFromAPI = () => {
  return (dispatch) => {
    dispatch(getMatches());
    dispatch(getMatchesSuccess(initialdata.matches));
  }
};

export const getMatches = () => ({
  type: Sys.FETCHING_MATCHES
});

export const getMatchesSuccess = (data) => ({
  type: Sys.FETCHING_MATCHES_SUCCESS,
  data,
});

export const getMatchesFailure = () => ({
  type: Sys.FETCHING_MATCHES_FAILURE
});

// NEWS
export const fetchNewsFromAPI = () => {
  return (dispatch) => {
    dispatch(getNews());
    fetch('https://api.openaq.org/v1/cities?limit=10&country=NL')
      .then(data => data.json())
      .then(json => {
        console.log('json:', json)
        dispatch(getNewsSuccess(json.results))
      })
      .catch(err => dispatch(getNewsFailure(err)));
  }
}

// {"meta":{"name":"openaq-api","license":"CC BY 4.0","website":"https://docs.openaq.org/","page":1,"limit":10,"found":67},"results":[{"city":"Zaandam","country":"NL","locations":1,"count":71665},{"city":"Amsterdam","country":"NL","locations":14,"count":643338},{"city":"Hoek v. Holland","country":"NL","locations":1,"count":71660},{"city":"Wieringerwerf","country":"NL","locations":1,"count":71671},{"city":"Rotterdam","country":"NL","locations":3,"count":143334},{"city":"Leiden","country":"NL","locations":1,"count":1620},{"city":"Schiedam","country":"NL","locations":2,"count":71663},{"city":"Rotterdam Noord ","country":"NL","locations":1,"count":53745},{"city":"De Rijp","country":"NL","locations":2,"count":17924},{"city":"Rotterdam Zuid","country":"NL","locations":2,"count":89591}]}

export const getNews = () => ({
  type: Sys.FETCHING_NEWS
});

export const getNewsSuccess = (data) => ({
  type: Sys.FETCHING_NEWS_SUCCESS,
  data,
});

export const getNewsFailure = () => ({
  type: Sys.FETCHING_NEWS_FAILURE
});
