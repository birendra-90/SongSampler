import axios from 'axios';

export const fetchSongs = (artist_name) => {
  let url = `https://api.spotify.com/v1/search?q=${artist_name}&type=artist`;
  let request = axios.get(url);

  return (dispatch) => {
    request.then(({data}) => {
      let artistId = data.artists.items[0].id;
      let url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=ES`;
      let request = axios.get(url);

      request.then(({data}) => {
        dispatch ({
          type: 'FETCH_SONGS',
          payload: data
        });
      });
    });
  };
};

export const setTerm = (term) => {
  return {
    type: 'SET_TERM',
    payload: term
  };
};
