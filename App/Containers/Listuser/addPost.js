import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Button,
  ToastAndroid
} from 'react-native'
import { addPost } from '../../Services/Apis'
import units from '../../Helper/viewPort'

let {width, height} = Dimensions.get('window')

class AddPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sendtoserver:{
        userId:1,
        title:'',
        body:''
      },
      loading:false,
    }
  }

  componentDidMount(){
    ToastAndroid.show('untuk user id di hardcode menjadi 1', ToastAndroid.SHORT);
  }

  submittoserver = () => {
    addPost(this.state.sendtoserver)
    .then(res => {
      ToastAndroid.show('add post success', ToastAndroid.SHORT);
      this.props.navigation.replace('Home')
    })
    .catch(err => {
      console.log('error',err)
    })
  }

  render() {
    return (
      <View>
        <View style={styles.boxinput}>
          <TextInput
            placeholder="input your Title"
            placeholderTextColor={'#CEC7C7'}
            underlineColorAndroid="transparent"
            style={{paddingTop: -5, width: width * 0.65,marginTop:20,justifyContent: 'center', paddingBottom: -5, fontSize: 16, alignItems: 'flex-start'}} allowFontScaling={false}
            onChangeText={(title) => this.setState({sendtoserver:{...this.state.sendtoserver,title}})}
          />
        </View>
        <View style={styles.boxinput}>
          <TextInput
            placeholderTextColor={'#CEC7C7'}
            underlineColorAndroid="transparent"
            placeholder="input your body"
            style={{paddingTop: -5, width: width * 0.65,marginTop:20,justifyContent: 'center', paddingBottom: -5, fontSize: 16, alignItems: 'flex-start'}} allowFontScaling={false}
            onChangeText={(body) => this.setState({sendtoserver:{...this.state.sendtoserver,body}})}
          />
        </View>
        <View style={{width:'100%', alignItems: 'center',marginTop:20}}>
          <Button
            onPress={this.submittoserver}
            title="SUBMIT"
            disable={false}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  boxinput:{
    borderBottomWidth: 1,
    borderBottomColor: '#CEC7C7',
    flexDirection: 'row',
    paddingBottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.75,
    paddingRight: 10
  }
})

export default AddPost
