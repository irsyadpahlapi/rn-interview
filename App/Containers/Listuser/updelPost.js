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
import { getPostId, updatePost, deletePost } from '../../Services/Apis'
import units from '../../Helper/viewPort'

let {width, height} = Dimensions.get('window')

class UpdelPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sendtoserver:{
        userId:null,
        id:'',
        title:'',
        body:''
      }
    }
  }

  componentWillMount(){
    getPostId()
    .then(res=>{
      console.log('response',res.data);
      this.setState({
        sendtoserver:{
          userId:res.data.userId,
          id:res.data.id,
          title:res.data.title,
          body:res.data.body
        }
      },() => {
        console.log('kkk',this.state.sendtoserver);
      })
    })
  }
  componentDidMount(){
    ToastAndroid.show('data sample id 1', ToastAndroid.SHORT);
  }

  submittoserver = () => {
    updatePost(this.state.sendtoserver)
    .then(res => {
      ToastAndroid.show('edit data success', ToastAndroid.SHORT)
      this.props.navigation.replace('Home')
    })
  }

  deletetoserver = () => {
    deletePost(this.state.sendtoserver.id)
    .then(res=>{
      ToastAndroid.show('delete data success', ToastAndroid.SHORT)
      this.props.navigation.replace('Home')
    })
  }

  render() {
    console.log(this.state.sendtoserver);
    return (
      <View>
        <View style={styles.boxinput}>
          <TextInput
            placeholder="input your Title"
            placeholderTextColor={'#CEC7C7'}
            underlineColorAndroid="transparent"
            value={this.state.sendtoserver.title}
            style={{paddingTop: -5, width: '100%',marginTop:20,justifyContent: 'center', paddingBottom: -5, fontSize: 16, alignItems: 'flex-start'}} allowFontScaling={false}
            onChangeText={(title) => this.setState({sendtoserver:{...this.state.sendtoserver,title}})}
          />
        </View>
        <View style={styles.boxinput}>
          <TextInput
            placeholderTextColor={'#CEC7C7'}
            underlineColorAndroid="transparent"
            placeholder="input your body"
            value={this.state.sendtoserver.body}
            style={{paddingTop: -5,height:30,width:'100%',marginTop:20,justifyContent: 'center', paddingBottom: -5, fontSize: 16, alignItems: 'flex-start'}} allowFontScaling={false}
            onChangeText={(body) => this.setState({sendtoserver:{...this.state.sendtoserver,body}})}
          />
        </View>
        <View style={{width:'100%',marginTop:20}}>
          <View>
            <Button
              onPress={this.submittoserver}
              title="EDIT"
              disable={this.state.sendtoserver.id === '' ? true : false}
            />
          </View>
          <View style={{marginTop:20}}>
            <Button
              onPress={this.deletetoserver}
              title="DELETE"
              disable={this.state.sendtoserver.id === '' ? true : false}
              color="red"
            />
          </View>

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
    width: '100%',
    paddingRight: 10
  }
})

export default UpdelPost
