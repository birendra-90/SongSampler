import { combineReducers } from 'redux';
import songReducer from './song_reducer';

const rootReducer = combineReducers({
  songs: songReducer
});

export default rootReducer;
