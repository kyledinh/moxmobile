import React, { Component } from 'react';
import { Text } from 'react-native';
import { Badge, Body, Button, Card, CardItem, Container, Content, H3, Header, Icon, Left, List, ListItem, Right, Thumbnail, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { fetchPlayersFromAPI } from '../redux/actions';
import { connect } from 'react-redux';
import AvatarTeam from '../components/AvatarTeam';


class AppTeams extends Component {

    render() {

        function navAppPlayer(data) {
            Actions.player({'player':data});
        }

        function findPlayerById(arr, id) {
            return arr.find((el)=> el.id === id);
        }
        let { players, isFetching } = this.props.players;
        let { teams } = this.props.teams;

        let teamsBlock = teams.map(function (team, index) {

            let playersBlock = team.players.map(function (id, index) {
                let player = findPlayerById(players, id);
                if (player == undefined) {
                    return <Text key={index}>[nf]</Text>
                }
                return (
                    <ListItem button style={{paddingLeft:8,paddingRight:8,minWidth:48,marginRight:4}} key={index} onPress={()=> {navAppPlayer(player)}}>
                    <Badge primary style={{marginRight:6}}><Text style={{ fontSize: 10, color: "#fff", lineHeight: 18 }}>{player.skill}</Text></Badge>
                    <Text>{player.name}</Text>
                    </ListItem>
                );
            });

            return (
                <Card key={index}>
                    <CardItem button>
                        <Left>
                            <AvatarTeam/>
                            <Body>
                                <H3>{team.name}</H3>
                                <Text>( {team.id} ) {team.bar}</Text>
                                <Text>Thursday Night League</Text>
                            </Body>
                        </Left>
                    </CardItem>

                    <CardItem>
                        <Content>
                        <List>
                            {playersBlock}
                        </List>
                        </Content>
                    </CardItem>

                    <CardItem>
                        <Left>
                            <Button transparent>
                                <Icon active name="ios-trophy" />
                                <Text> {team.wins} Wins</Text>
                                <Icon active name="ios-ribbon" style={{marginLeft:8}}/>
                                <Text> {team.points} Points</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                                <Text></Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>11h ago</Text>
                        </Right>
                    </CardItem>
                </Card>
            )
        });

        return (
            <Container>
            <Header>
                <Left>
                    <Button transparent onPress={() => Actions.pop()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Teams</Title>
                </Body>
                <Right>
                <Button transparent onPress={() => Actions.teamadd()}>
                    <Icon name='md-add' />
                </Button>
                </Right>
            </Header>
            <Content style={{marginTop:0}}>
                {teamsBlock}
            </Content>
            </Container>
        );
    }
}

function mapStateToProps (state) {
    return {
        players: state.players,
        teams: state.teams
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getPlayers: () => dispatch(fetchPlayersFromAPI())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppTeams);
