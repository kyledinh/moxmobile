import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import { Container, StyleProvider } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import AppHeader from './app/components/AppHeader';
import AppFooter from './app/components/AppFooter';
import AppLoading from './app/components/AppLoading';

import getTheme from './app/themes/components';
import deciderColor from './app/themes/variables/deciderColor';

import AppAbout from './app/scenes/AppAbout';
import AppHome from './app/scenes/AppHome';
import AppMatches from './app/scenes/AppMatches';
import AppPlayer from './app/scenes/AppPlayer';
import AppPlayerAdd from './app/scenes/AppPlayerAdd';
import AppPlayers from './app/scenes/AppPlayers';
import AppNews from './app/scenes/AppNews';
import AppTeams from './app/scenes/AppTeams';
import AppTeamAdd from './app/scenes/AppTeamAdd';

import configureStore from './app/redux/store';
import initialdata from  './app/data/initialdata';

const store = configureStore();

export default class App extends Component<{}> {

    constructor() {
        super()
        this.state = {
            isStoreLoaded: false,
            books: initialdata.books
        };
    }

    componentDidMount() {
        persistStore(
            store,
            {
              storage: AsyncStorage,
              blacklist: ['news']
            },
            () => { this.setState({isStoreLoaded: true}); }
        );
    }

    render() {
        if (!this.state.isStoreLoaded) {
            return <AppLoading/>
        }
        return (
            <Provider store={store}>
            <StyleProvider style={getTheme(deciderColor)}>
                <Container>
                    <Router>
                        <Scene key="home" component={AppHome} hideNavBar={true}/>
                        <Scene key="matches" component={AppMatches} hideNavBar={true}/>
                        <Scene key="teams" component={AppTeams} hideNavBar={true}/>
                        <Scene key="teamadd" component={AppTeamAdd} hideNavBar={true}/>
                        <Scene key="players" component={AppPlayers} hideNavBar={true}/>
                        <Scene key="player" component={AppPlayer} players={this.state.players} hideNavBar={true}/>
                        <Scene key="playeradd" component={AppPlayerAdd} hideNavBar={true}/>
                        <Scene key="about" component={AppAbout} hideNavBar={true}/>
                        <Scene key="news" component={AppNews} hideNavBar={true}/>
                    </Router>
                    <AppFooter/>
                </Container>
            </StyleProvider>
            </Provider>
        );
    }
}
