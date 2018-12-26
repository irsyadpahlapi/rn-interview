import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native'
import { getPhotos } from '../../Services/Apis'
import units from '../../Helper/viewPort'
import { allLogo } from '../../Assets'

const { width, height } = Dimensions.get('window')

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - 75
}
class AlbumPhotos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data:[],
      loading:false,
    }
  }

  componentDidMount(){
    getPhotos(this.props.navigation.state.params.id)
    .then(res => {
      this.setState({
        data:res.data.map((value,index)=>{
          return {
            ...value,
            selected:false
          }
        }),
        loading:false
      })
    })
  }

  toggle = (i) => {
    let {data} = this.state
    this.setState({
        data: data.map((item, index) => {
          if (index === i) {
            return {...item, selected: !item.selected}
          } else {
            return item
          }
        })
    })
  }

  flexRowMenu = ({item,index}) => {
    return (
      <View>
        <TouchableOpacity
        activeOpacity={0.8}
        style={styles.imageArea}
        onPress={() => this.toggle(index)}>
          <Image
            source={{uri: item.thumbnailUrl}}
            style={styles.image}
            resizeMethod="resize"
          />
        </TouchableOpacity>
        {
            item.selected &&
            <Image source={allLogo.icGreenChecklist} style={styles.icChecklist}/>
        }
      </View>
    )
  }

  render() {
    return (
      <View>
      <FlatList
        keyExtractor={(item,index) => index }
        data={this.state.data}
        renderItem={this.flexRowMenu}
      numColumns={2}
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
  imageArea: {
    width: width/2-10,
    height: 180,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: width/2-10,
    height: 180,
    margin: 3
  },
  icChecklist: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    position: 'absolute',
    top: 70,
    left: width/4 - 20
  },
})

export default AlbumPhotos
