import { Sys } from '../System';
import initialdata from  '../data/initialdata';

export function fetchPlayersFromAPI() {
    return (dispatch) => {
        dispatch(getPlayers());
        dispatch(getPlayersSuccess(initialdata.players));

        // fetch('https://swapi.co/api/people/')
        //     .then(data => data.json())
        //     .then(json => {
        //         console.log('json:', json)
        //         dispatch(getPeopleSuccess(json.results))
        //     })
        //     .catch(err => dispatch(getPeopleFailure(err)));
    }
}

export function getPlayers() {
    return {
        type: Sys.FETCHING_PLAYERS
    }
}

export function addPlayer(data) {
    return {
        type: Sys.PLAYER_ADD_NEW,
        data
    }
}

export function getPlayersSuccess(data) {
    return {
        type: Sys.FETCHING_PLAYERS_SUCCESS,
        data,
    }
}

export function getPlayersFailure() {
    return {
        type: Sys.FETCHING_PLAYERS_FAILURE
    }
}

// TEAMS
export function fetchTeamsFromAPI() {
    return (dispatch) => {
        dispatch(getTeams());
        dispatch(getTeamsSuccess(initaldata.teams));
    }
}

export function getTeams() {
    return {
        type: Sys.FETCHING_TEAMS
    }
}

export function getTeamsSuccess(data) {
    return {
        type: Sys.FETCHING_TEAMS_SUCCESS,
        data,
    }
}

export function getTeamsFailure() {
    return {
        type: Sys.FETCHING_TEAMS_FAILURE
    }
}

// MATCHES
export function fetchMatchesFromAPI() {
    return (dispatch) => {
        dispatch(getMatches());
        dispatch(getMatchesSuccess(initialdata.matches));
    }
}

export function getMatches() {
    return {
        type: Sys.FETCHING_MATCHES
    }
}

export function getMatchesSuccess(data) {
    return {
        type: Sys.FETCHING_MATCHES_SUCCESS,
        data,
    }
}

export function getMatchesFailure() {
    return {
        type: Sys.FETCHING_MATCHES_FAILURE
    }
}

// NEWS
export function fetchNewsFromAPI() {
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

export function getNews() {
    return {
        type: Sys.FETCHING_NEWS
    }
}

export function getNewsSuccess(data) {
    return {
        type: Sys.FETCHING_NEWS_SUCCESS,
        data,
    }
}

export function getNewsFailure() {
    return {
        type: Sys.FETCHING_NEWS_FAILURE
    }
}
