import React, {Component} from 'react'
import {
  Text,
  Image,
  StyleSheet,
  View} from 'react-native'

export default class App extends Component{
  componentDidMount() {
    const self = this
    setTimeout(() => {
      self.props.navigation.replace('Home')
    }, 2000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>SplashScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
