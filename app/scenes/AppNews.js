import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Body, Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Spinner, Thumbnail, Title } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import AppHeader from '../components/AppHeader';
import { fetchNewsFromAPI } from '../redux/actions';
import { Cfg, Sys } from '../System';

class AppNews extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.getNews();
  }

  render() {
    let { news, isFetching, error } = this.props.news;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>News</Title>
          </Body>
          <Right>
            <Button transparent>
            </Button>
          </Right>
        </Header>

        <Content style={{marginTop:0, marginLeft:5, marginRight:5}}>
          <Text style={{marginTop:10, marginBottom:10}}>
            This screen can load news info from an external API.
            Then stores them in the Async store.
          </Text>

          <Button block info onPress={() => this.props.getNews()}>
            <Text>Reload Netherlands Air Quality</Text>
          </Button>
          {
            isFetching && <Spinner color='blue'/>
          }

          {
            news.length ? (
              news.map((news, i) => {
                return (
                  <Card key={i}>
                    <CardItem header>
                      <Icon style={{fontSize:48, marginRight:10}} name="image" />
                      <Text style={{marginRight: 10}}>{news.city}</Text>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>Count: {news.count}</Text>
                        <Text>Country: {news.country}</Text>
                        <Text>Location: {news.location}</Text>
                      </Body>
                    </CardItem>
                  </Card>
                )
              })
            ) : null
          }
        </Content>
      </Container>
    );
  }
}

function mapStateToProps (state) {
  return {
    news: state.news
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getNews: () => dispatch(fetchNewsFromAPI())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNews);
