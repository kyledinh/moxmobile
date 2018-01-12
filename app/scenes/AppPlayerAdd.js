import React, { Component } from 'react';
import { Text, TextInput} from 'react-native';
import { Body, Button, Card, CardItem, Container, Content, Form, H3, Header, Icon,
    Input, Item,Left, Segment, Picker, Right, Thumbnail, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Sys } from '../System';

class AppPlayerAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "player name",
      id : 9999,
      team: "0",
      skill: 3
    }
  }

  setSkill(n) {
    this.setState({ skill: n });
  }

  setTeam(value) {
    this.setState({
      team: value
    });
  }

  addNewPlayer(players) {
    var ts = Math.round((new Date()).getTime() / 1000);
    var newPlayer = {
      name: this.state.name,
      id: ts,
      team : this.state.team * 1,
      skill: this.state.skill,
      wins: 0,
      points: 0
    };
    players.unshift(newPlayer);
    alert("Make New Player! " + newPlayer.name );
    Actions.players();
  }

  render() {
    let { players } = this.props.players;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Add Player</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>

        <Content style={{marginTop:60}}>
          <Body>
            <Thumbnail large source={require('../img/avatar-1.png')} />
            <TextInput
              style={{height: 40}}
              placeholder="Player Name"
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

            <Text style={{marginTop:20}}>Skill Level: {this.state.skill}</Text>
            <Segment>
              <Button first active={this.state.skill === 2} onPress={()=> {this.setSkill(2)}}>
                <Text>2</Text>
              </Button>
              <Button active={this.state.skill === 3} onPress={()=> {this.setSkill(3)}}>
                <Text>3</Text>
              </Button>
              <Button active={this.state.skill === 4} onPress={()=> {this.setSkill(4)}}>
                <Text>4</Text>
              </Button>
              <Button active={this.state.skill === 5} onPress={()=> {this.setSkill(5)}}>
                <Text>5</Text>
              </Button>
              <Button active={this.state.skill === 6} onPress={()=> {this.setSkill(6)}}>
                <Text>6</Text>
              </Button>
              <Button last active={this.state.skill === 7} onPress={()=> {this.setSkill(7)}}>
                <Text>7</Text>
              </Button>
            </Segment>
            <Button block info style={{marginLeft:8, marginRight:8, marginTop:20}} onPress={() => this.addNewPlayer(players)}>
              <Text>Save</Text>
            </Button>
          </Body>
        </Content>
      </Container>
    )
  }
}

// const mapStatToProps = (state) => ({ player: state.players })
function mapStateToProps (state) {
  return {
    players: state.players
  }
}

export default connect(mapStateToProps)(AppPlayerAdd);
