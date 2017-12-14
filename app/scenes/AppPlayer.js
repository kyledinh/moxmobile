import React, { Component } from 'react';
import { Text } from 'react-native';
import { Body, Button, Card, CardItem, Container, Content, H3, Header, Icon, Left, Segment, Right, Thumbnail, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class AppPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            player: this.props.player
        }
    }

    setSkill(n) {
        var p = this.state.player;
        p.skill = n;
        this.setState({ player: p });
    }

    render() {

        return (
            <Container>
            <Header>
                <Left>
                    <Button transparent onPress={() => Actions.pop()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.state.player.name}</Title>
                </Body>
                <Right>
                <Button transparent>
                    <Icon name='menu' />
                </Button>
                </Right>
            </Header>

            <Content style={{marginTop:0}}>
                <Card >
                    <CardItem>
                        <Left>
                            <Thumbnail source={require('../img/team-kyle-profile.jpg')} />
                            <Body>
                                <Text>{this.state.player.name}</Text>
                                <Text>{this.state.player.id}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>Skill Level {this.state.player.skill}</Text>
                            <Segment>
                                <Button first active={this.state.player.skill === 2} onPress={()=> {this.setSkill(2)}}>
                                    <Text>2</Text>
                                </Button>
                                <Button active={this.state.player.skill === 3} onPress={()=> {this.setSkill(3)}}>
                                    <Text>3</Text>
                                </Button>
                                <Button active={this.state.player.skill === 4} onPress={()=> {this.setSkill(4)}}>
                                    <Text>4</Text>
                                </Button>
                                <Button active={this.state.player.skill === 5} onPress={()=> {this.setSkill(5)}}>
                                    <Text>5</Text>
                                </Button>
                                <Button active={this.state.player.skill === 6} onPress={()=> {this.setSkill(6)}}>
                                    <Text>6</Text>
                                </Button>
                                <Button last active={this.state.player.skill === 7} onPress={()=> {this.setSkill(7)}}>
                                    <Text>7</Text>
                                </Button>
                            </Segment>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
            </Container>
        )
    }
}

module.export = AppPlayer;
