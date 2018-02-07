import React, { Component } from 'react';

import BookList from '../containers/book-list.container'
import BookDetail from '../containers/book-details.container'

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
