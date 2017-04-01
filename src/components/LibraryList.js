import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return;
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);

// calls function connect, when it's called it returns another function
// call return funciton with LibraryList

// mapStateToProps: take global state object, map it and provide as Props for component
