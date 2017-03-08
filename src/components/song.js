import React, {Component} from 'react';
import {connect} from 'react-redux';

class SongListItem extends Component {
  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>Song Name</th>
            <th>Album Name</th>
            <th>Popularity</th>
            <th>Song ID</th>
          </tr>
        </thead>
        <tbody>
          {this.props.songs.songs.map(this.renderSong)}
        </tbody>
      </table>
    )
  }

  renderSong(songData){
    const songName = songData.name;
    const albumName = songData.album.name;
    const popularity = songData.popularity;
    const songID = songData.id
    
    return(
      <tr key={songID}>
        <td>{songName}</td>
        <td>{albumName}</td>
        <td>{popularity}</td>
        <td>{songID}</td>
      </tr>
    )
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(SongListItem);
