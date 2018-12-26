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
import { getCommentId, updateComment, deleteComment } from '../../Services/Apis'
import units from '../../Helper/viewPort'

let {width, height} = Dimensions.get('window')

class UpdelComment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sendtoserver:{
        postId:null,
        id:'',
        name:'',
        email:'',
        body:''
      }
    }
  }

  componentWillMount(){
    getCommentId()
    .then(res=>{
      console.log('response',res.data);
      this.setState({
        sendtoserver:{
          postId:res.data.postId,
          id:res.data.id,
          name:res.data.name,
          email:res.data.email,
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
    updateComment(this.state.sendtoserver)
    .then(res => {
      ToastAndroid.show('edit data success', ToastAndroid.SHORT);
      this.props.navigation.replace('Home')
    })
  }

  deletetoserver = () => {
    deleteComment(this.state.sendtoserver.id)
    .then(res=>{
      ToastAndroid.show('delete data success', ToastAndroid.SHORT);
      this.props.navigation.replace('Home')
    })
  }

  render() {
    console.log(this.state.sendtoserver);
    return (
      <View>
      <View style={styles.boxinput}>
        <TextInput
          placeholder="input your name"
          placeholderTextColor={'#CEC7C7'}
          underlineColorAndroid="transparent"
          value={this.state.sendtoserver.name}
          style={{paddingTop: -5, width: '100%',marginTop:20,justifyContent: 'center', paddingBottom: -5, fontSize: 16, alignItems: 'flex-start'}} allowFontScaling={false}
          onChangeText={(name) => this.setState({sendtoserver:{...this.state.sendtoserver,name}})}
        />
      </View>
      <View style={styles.boxinput}>
        <TextInput
          placeholder="input your email"
          placeholderTextColor={'#CEC7C7'}
          underlineColorAndroid="transparent"
          value={this.state.sendtoserver.email}
          style={{paddingTop: -5, width: '100%',marginTop:20,justifyContent: 'center', paddingBottom: -5, fontSize: 16, alignItems: 'flex-start'}} allowFontScaling={false}
          onChangeText={(email) => this.setState({sendtoserver:{...this.state.sendtoserver,email}})}
        />
      </View>
      <View style={styles.boxinput}>
        <TextInput
          placeholderTextColor={'#CEC7C7'}
          underlineColorAndroid="transparent"
          placeholder="input your body"
          value={this.state.sendtoserver.body}
          style={{paddingTop: -5, height:30, width: '100%',marginTop:20,justifyContent: 'center', paddingBottom: -5, fontSize: 16, alignItems: 'flex-start'}} allowFontScaling={false}
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

export default UpdelComment
