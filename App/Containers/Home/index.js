import React, { Component } from 'react'
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native'
import { getUser } from '../../Services/Apis'
import Ripple from '../../Components/Ripple'
import { allLogo } from '../../Assets'
import units from '../../Helper/viewPort'
import { colors } from '../../Helper/styles'

const { width, height } = Dimensions.get('window')

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - 75
}
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data:[],
      menulist:[
        {
          id:1,
          name:'user',
          route:'Listuser',
          icon:allLogo.icHomeDirectory
        },
        {
          id:2,
          name:'album',
          route:'ListAlbum',
          icon:allLogo.icHomeDirectory
        },
        {
          id:3,
          name:'add post',
          route:'AddPost',
          icon:allLogo.icHomeDirectory
        },
        {
          id:4,
          name:'update delete post',
          route:'UpdelPost',
          icon:allLogo.icHomeDirectory
        },
        {
          id:5,
          name:'add comment',
          route:'AddComment',
          icon:allLogo.icHomeDirectory
        },
        {
          id:4,
          name:'edit delete comment',
          route:'UpdelComment',
          icon:allLogo.icHomeDirectory
        },
      ]
    }
  }


  action = (route) => {
    this.props.navigation.navigate(route)
  }
  flexRowMenu = (item) => {
    return (
      <View style={styles.flexRoot}>
        <Ripple onPress={() => this.action(item.route)} style={{width:'100%',alignItems: 'center',
        justifyContent: 'center'}}>
          <View style={styles.viewAnimation}>
            {
              item.icon === null ?
              <View style={styles.viewText}>
                <Text>{item.name}</Text>
              </View>
              :
              <Image source={item.icon} style={styles.icHome} />
            }

            <Text>{item.name}</Text>
          </View>
        </Ripple>
      </View>
    )
  }
  render() {
    return (
      <View>
        <FlatList
          keyExtractor={(item,index) => index }
          data={this.state.menulist}
          renderItem={({ item }) =>
          this.flexRowMenu (item)
        }
          numColumns={2}
          />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  flexRoot: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewAnimation: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewText: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.colorPrimary,
    borderRadius: 20,
    marginBottom: 6,
    marginTop: 6
  },
  icHome: {
    width: 20 * units.vw,
    height: 20 * units.vw
  },
});
export default Home
