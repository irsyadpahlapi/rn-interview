import axios from 'axios'
import { AsyncStorage } from 'react-native'

const defaultHeader = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'dataType': 'json',
}

async function modif() {
  const authorization = await AsyncStorage.getItem('authorization')
  return authorization
}

const xhr = async (url, method, data, headers = defaultHeader) => {
  headers.authorization = await modif()

  const config = {
    method,
    url,
    headers,
    data,
  }
  console.log(config)
  try {
    const res = await axios(config)
    return res
  }
  catch ({ response }) {
    throw response
  }
}


export default xhr
