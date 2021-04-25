import axios from 'axios'
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyBknjkBBUm-L37NcPkOF31AM4WIUGm6Kec',
   },
})

export default request