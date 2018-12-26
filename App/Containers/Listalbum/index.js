import React, { Component } from 'react'
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native'
import { getUser } from '../../Services/Apis'
import units from '../../Helper/viewPort'

const { width, height } = Dimensions.get('window')

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - 75
}
class ListAlbum extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data:[],
      loading:false,
    }
  }

  componentDidMount(){
    this.setState({
      loading:true
    })
    getUser()
    .then(res => {
      this.setState({
        data:res.data,
        loading:false
      })
    })
  }

  action = (item) => {
    this.props.navigation.navigate('GaleryUser',item)
  }

  flexRowMenu = (item) => {
    return (
      <View>
        <TouchableOpacity
        style={styles.touchCategory}
        onPress= {() => this.action(item)}>
          <Text style={{textAlign:'center'}}>{item.email}</Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    height: 8.3 * units.vw,
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
export default ListAlbum
