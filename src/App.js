import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import BookSearch from './BookSearch'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  assignShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.loadBooks());
  }
  
  loadBooks = () => {
    BooksAPI.getAll().then(results => this.setState({
      books: results
    }))
  }

  componentDidMount() {
    this.loadBooks();
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
            <BookSearch closeSearch = { this.closeSearch } assignShelf={this.assignShelf}/>)}
            />
        <Route path="/" exact render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf id="currentlyReading" title="Currently Reading" books={this.state.books} assignShelf={this.assignShelf}></Bookshelf>
                <Bookshelf id="wantToRead" title="Want To Read" books={this.state.books} assignShelf={this.assignShelf}></Bookshelf>
                <Bookshelf id="read" title="Read" books={this.state.books} assignShelf={this.assignShelf}></Bookshelf>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search' className='open-search-link'>Add a book</Link>
            </div>
          </div>
        )}
        />
        }
      </div>
    )
  }
}

export default BooksApp
