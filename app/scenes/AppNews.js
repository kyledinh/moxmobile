import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Body, Button, Card, CardItem, Container, Content, Icon, Left, Right, Spinner, Thumbnail, Title } from 'native-base';
import { connect } from 'react-redux';
import NavigationService from '../../NavigationService';

import AppHeader from '../components/AppHeader';
import { fetchNewsFromAPI } from '../redux/actions';
import { Cfg, Sys } from '../System';

class AppNews extends Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'News'
  };

  componentDidMount() {
    this.props.getNews();
  }

  renderNews = (news) => {
    if (news != undefined && news.length) {
      return news.map((news, i) => {
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
      });
    }
  }

  render() {
    let { news, isFetching, error } = this.props.news;
    return (
      <Container>
        <Content style={{marginTop:0, marginLeft:5, marginRight:5}}>
          <Text style={{marginTop:10, marginBottom:10}}>
            This screen can load news info from an external API.
            Then stores them in the Async store.
          </Text>

          <Button block info onPress={() => this.props.getNews()}>
            <Text>Reload Netherlands Air Quality</Text>
          </Button>

          { isFetching && <Spinner color='blue'/> }
          { this.renderNews(news) }

        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) =>  ({
  news: state.news
});

const mapDispatchToProps = (dispatch) => ({
  getNews: () => dispatch(fetchNewsFromAPI())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNews);
