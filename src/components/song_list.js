import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchSongs} from '../actions/index';
import SongListItem from './song';

class SongList extends Component {
  componentWillMount() {
    this.props.fetchSongs('Sia');
  }

  render() {
    return (
      <div>
        <SongListItem />
      </div>
    );
  }
}

export default connect(null, {fetchSongs})(SongList);
