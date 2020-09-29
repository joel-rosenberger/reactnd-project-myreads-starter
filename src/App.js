import React from 'react'
import Bookshelf from './Bookshelf'
import BookSearch from './BookSearch'

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  assignShelf = (book, shelf) => {
    console.log(book.id);
    console.log(shelf);
    BooksAPI.update(book, shelf).then(() => this.loadBooks());
  }
  
  loadBooks = () => {
    BooksAPI.getAll().then(results => this.setState({
      books: results
    }))
  }

  closeSearch = () => {
    this.setState({ showSearchPage: false });
  }

  componentDidMount() {
    this.loadBooks();
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
            <BookSearch closeSearch = { this.closeSearch } />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf id="currentlyReading" title="Currently Reading" books={this.state.books} assignShelf={ this.assignShelf }></Bookshelf>
                <Bookshelf id="wantToRead" title="Want To Read" books={this.state.books} assignShelf={ this.assignShelf }></Bookshelf>
                <Bookshelf id="read" title="Read" books={this.state.books} assignShelf={ this.assignShelf }></Bookshelf>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
