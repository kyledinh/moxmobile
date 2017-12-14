import React, { Component } from 'react';
import { Text } from 'react-native';
import { Body, Button, Card, CardItem, Container, Content, H3, Header, Icon, Left, Picker, Right, Thumbnail, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { fetchMatchesFromAPI } from '../redux/actions';

class AppMatches extends Component {

    render() {

        function navAppMatch(data) {
            Actions.match({'match':data});
        }

        let { matches, isFetching } = this.props.matches;
        let matchesBlock = matches.map(function (match, index) {

            return (
                <Card key={index}>
                    <CardItem button onPress={()=> {navAppMatch(match)}}>
                        <Left>
                            <Thumbnail source={require('../img/avatar-3.png')} />
                            <Body>
                                <H3>Match Name</H3>
                                <Text>match date</Text>
                                <Text>Thursday Night League</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent>
                                <Icon active name="ios-trophy" />
                                <Text> Wins</Text>
                                <Icon active name="ios-ribbon" style={{marginLeft:8}}/>
                                <Text> Points</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                                <Text></Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>Status: Open</Text>
                        </Right>
                    </CardItem>
                </Card>
            );
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
                    <Title>Matches</Title>
                </Body>
                <Right>
                    {/*
                    <Button transparent onPress={() => Actions.matchadd()}>
                        <Icon name='md-add' />
                    </Button>
                    */}
                </Right>
            </Header>
            <Content style={{marginTop:0}}>
                <Button block info style={{marginLeft:8, marginRight:8, marginTop: 8}} onPress={() => this.props.getMatches()}>
                    <Text>Reset Matches</Text>
                </Button>
                {matchesBlock}
            </Content>
            </Container>
        );
    }
}

function mapStateToProps (state) {
    return {
        matches: state.matches
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getMatches: () => dispatch(fetchMatchesFromAPI())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppMatches);
