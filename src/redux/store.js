import { createStore, applyMiddleware, combineReducers } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {authReducer} from '../redux/reducers/auth.reducer'
import {homeVideosReducer} from '../redux/reducers/video.reducer'



const rootreducer = combineReducers({
    auth:authReducer,
    homeVideos:homeVideosReducer
})

const store = createStore(
  rootreducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
