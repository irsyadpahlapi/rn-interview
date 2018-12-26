import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { getComment } from '../../Services/Apis'
import units from '../../Helper/viewPort'

class CommentPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data:[],
      loading:false,
    }
  }

  componentDidMount(){
    getComment(this.props.navigation.state.params.id)
    .then(res => {
      this.setState({
        data:res.data,
        loading:false
      })
    })
  }

  flexRowMenu = (item) => {
    return (
      <View
      style={styles.touchCategory}>
        <Text style={{fontWeight:'bold'}}>{item.name}</Text>
        <Text>{item.body}</Text>
      </View>
    )
  }

  render() {
    return (
      <View>
      <FlatList
        keyExtractor={(item,index) => index }
        data={this.state.data}
        renderItem={({ item }) =>
        this.flexRowMenu (item)
      }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  touchCategory: {
    width: 'auto',
    paddingLeft: 3.33 * units.vw,
    paddingRight: 3.33 * units.vw,
    paddingTop: 4.33 * units.vh,
    paddingBottom: 4.33 * units.vh,
    borderRadius: 4.16 * units.vw,
    marginTop:5,
    marginLeft: 2 * units.vw,
    marginRight: 2 * units.vw,
    marginBottom: 5,
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: '#aaa',
    elevation: 2,
  },
})

export default CommentPost
