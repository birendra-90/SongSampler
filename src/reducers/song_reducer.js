export default function(state = {}, action){
  switch(action.type){
    case 'FETCH_SONGS':
      return {...state.songs, songs: action.payload.tracks};
    default:
      return state;
  }
}
