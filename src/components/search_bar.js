import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchSongs} from '../actions/index';
import {setTerm} from '../actions/index';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input onChange={this.onInputChange.bind(this)}></input>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }

  onInputChange(event){
    this.props.setTerm(event.target.value);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchSongs(this.props.term);
  }
}

function mapStateToProps(state) {
  return {term: state.term}
}

export default connect(mapStateToProps, {fetchSongs, setTerm})(SearchBar);
