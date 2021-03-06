import React, { Component } from 'react';
import { Text, TextInput} from 'react-native';
import { Body, Button, Card, CardItem, Container, Content, Form, H3, Icon,
    Input, Item,Left, Segment, Picker, Right, Thumbnail, Title } from 'native-base';
import NavigationService from '../../NavigationService';
import { connect } from 'react-redux';
import { Sys } from '../System';

class AppTeamAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "player name",
      id : 9999,
      team: "0",
      skill: 3
    }
  }


  static navigationOptions = {
    title: 'Add Team',
  };

  setTeam(value) {
    this.setState({
      team: value
    });
  }

  addNewTeam(teams) {
    var newTeam = {
      name: this.state.name,
      id: Math.round((new Date()).getTime() / 1000),
      team : this.state.team * 1,
      wins: 0,
      points: 0
    };
    players.unshift(newPlayer);
    alert("Make New Player! " + newPlayer.name );
    NavigationService.navigate('Players');
  }

  render() {
    let { players } = this.props.players;
    let { teams } = this.props.teams;
    return (
      <Container>
        <Content style={{marginTop:60}}>
          <Body>
            <Thumbnail large source={require('../img/avatar-3.png')} />
            <TextInput
              style={{height: 40}}
              placeholder="Team Name"
              onChangeText={(text) => this.setState({name: text})}
            />
            <Text>Team:</Text>
            <Picker
              iosHeader="Select Team"
              mode="dropdown"
              selectedValue={this.state.team}
              onValueChange={this.setTeam.bind(this)}
            >
              <Picker.Item label="No Teams" value="0" />
              <Picker.Item label="Ragnarok" value="4201" />
              <Picker.Item label="Mount Olympus" value="4202" />
              <Picker.Item label="Pyramids" value="4103" />
              <Picker.Item label="BenDovre" value="4111" />
            </Picker>

            <Button block info style={{marginLeft:8, marginRight:8, marginTop:20}} onPress={() => this.addNewTeam(teams)}>
              <Text>Save</Text>
            </Button>
          </Body>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  teams: state.teams,
  players: state.players
});

export default connect(mapStateToProps)(AppTeamAdd);
