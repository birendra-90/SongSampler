const INITIAL_STATE = {
  songs: []
};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case 'FETCH_SONGS':
      return {...state, songs: action.payload.tracks};
    default:
      return state;
  }
}
