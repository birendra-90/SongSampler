import React, {Component} from 'react';
import {connect} from 'react-redux';

class Song extends Component {
  render() {
    return (
        <tbody>
          {this.props.songs.map(this.renderSong)}
        </tbody>
    )
  }

  renderSong(songData){
    const songName = songData.name;
    const albumName = songData.album.name;
    const popularity = songData.popularity;
    const songPreview = songData.preview_url

    return(
      <tr key={songPreview}>
        <td>{songName}</td>
        <td>{albumName}</td>
        <td>{popularity}</td>
        <td>
          <video controls name="media">
            <source src={songPreview} type="audio/mpeg"></source>
          </video>
        </td>
      </tr>
    )
  }
}

function mapStateToProps(state){
  return {songs: state.songs};
}

export default connect(mapStateToProps)(Song);
