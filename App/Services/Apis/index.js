import xhr from './axios'
import {
  URL_GET_USER,
  URL_GET_USER_POST,
  URL_GET_COMMENT_POST,
  URL_GET_USER_ALBUM,
  URL_GET_ALBUM_PHOTOS,
} from '../../Configs/Api'

export const getUser = () => {
  return xhr(URL_GET_USER, 'get')
}

export const getPost = (id) => {
  return xhr(`${URL_GET_USER_POST}?userId=${id}`,'get')
}

export const getPostId = () => {
  return xhr(`${URL_GET_USER_POST}/1`,'get')
}

export const getComment = (id) => {
  return xhr(`${URL_GET_COMMENT_POST}?postId=${id}`,'get')
}

export const getCommentId = () => {
  return xhr(`${URL_GET_COMMENT_POST}/1`,'get')
}

export const getAlbum = (id) => {
  return xhr(`${URL_GET_USER_ALBUM}?userId=${id}`,'get')
}

export const getPhotos = (id) => {
  return xhr(`${URL_GET_ALBUM_PHOTOS}?albumId=${id}`,'get')
}

export const addPost = (data) => {
  return xhr(`${URL_GET_USER_POST}`,'post',data)
}

export const updatePost = (data) => {
  return xhr(`${URL_GET_USER_POST}/${data.id}`,'put',data)
}

export const deletePost = (id) => {
  return xhr(`${URL_GET_USER_POST}/${id}`,'delete')
}

export const addComment = (data) => {
  return xhr(`${URL_GET_COMMENT_POST}`,'post',data)
}

export const updateComment = (data) => {
  return xhr(`${URL_GET_COMMENT_POST}/${data.id}`,'put',data)
}

export const deleteComment = (id) => {
  return xhr(`${URL_GET_COMMENT_POST}/${id}`,'delete')
}
