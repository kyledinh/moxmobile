import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import NavigationService from './NavigationService';

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { Container, Root, StyleProvider } from 'native-base';

import AppHeader from './app/components/AppHeader';
import AppFooter from './app/components/AppFooter';
import AppLoading from './app/components/AppLoading';

import getTheme from './app/themes/components';
import moxColor from './app/themes/variables/moxColor';

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

const TopLevelNavigator = createStackNavigator(
  {
    About: AppAbout,
    Home: AppHome,
    Matches: AppMatches,
    News: AppNews,
    Player: AppPlayer,
    PlayerAdd: AppPlayerAdd,
    Players: AppPlayers,
    TeamAdd: AppTeamAdd,
    Teams: AppTeams,

  }, {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#6a5b40',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

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

        <StyleProvider style={getTheme(moxColor)}>
          <Root>
            <Container>
              <TopLevelNavigator
                ref={navigatorRef => {
                  NavigationService.setTopLevelNavigator(navigatorRef);
                }}
              />
              <AppFooter/>
            </Container>
          </Root>
        </StyleProvider>
      </Provider>
    );
  }
}
