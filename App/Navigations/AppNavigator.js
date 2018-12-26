import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import SplashScreen from '../Containers/SplashScreen'
import Home from '../Containers/Home'

//menu user
import Listuser from '../Containers/Listuser'
import PostUser from '../Containers/Listuser/postUser.js'
import CommentPost from '../Containers/Listuser/commentPost.js'

//menu album
import ListAlbum from '../Containers/Listalbum'
import GaleryUser from '../Containers/Listalbum/galeryUser.js'
import AlbumPhotos from '../Containers/Listalbum/albumPhotos.js'

import AddPost from '../Containers/Listuser/addPost.js'
import AddComment from '../Containers/Listuser/addComment.js'

import UpdelPost from '../Containers/Listuser/updelPost.js'
import UpdelComment from '../Containers/Listuser/updelComment.js'



const AppNavigator = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    Home: { screen: Home },
    Listuser: { screen: Listuser },
    PostUser: { screen: PostUser },
    CommentPost: { screen: CommentPost },
    ListAlbum: { screen: ListAlbum },
    GaleryUser: { screen: GaleryUser },
    AlbumPhotos: { screen: AlbumPhotos },
    AddPost: { screen: AddPost },
    AddComment: { screen: AddComment },
    UpdelPost: { screen: UpdelPost },
    UpdelComment: { screen: UpdelComment }
  },
  {
    headerMode: 'none',
    initialRouteName: 'SplashScreen',
  }
)

export default createAppContainer(AppNavigator)
