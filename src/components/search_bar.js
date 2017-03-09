import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchSongs} from '../actions/index';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input></input>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchSongs('Sia');
  }
}

export default connect(null, {fetchSongs})(SearchBar);
