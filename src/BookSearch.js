import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksGrid from './BooksGrid';
import * as BooksAPI from './BooksAPI';
import { debounce } from 'lodash';

class BookSearch extends Component {
    state = {
        query: "",
        bookResults: []
    }

    queryChange = (ev) => {
        const value = ev.target.value;
        this.setState({
            query: value
        }, debounce(() => {
            //Don't bother searching on an empty query
            if (!value) {
                this.setState({
                    bookResults: []
                })
            } else {
                BooksAPI.search(this.state.query)
                    .then((books) => {
                        if (!books || books.error) {
                            books = [];
                        }
                        this.setState({
                            bookResults: books
                        })
                    }
                    )
            }
        },500));
    }

    render(){
        return <div className="search-books">
        <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
            {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={this.queryChange} value={this.state.value}/>
        </div>
        </div>
        <div className="search-books-results">
        <BooksGrid books={this.state.bookResults} assignShelf={this.props.assignShelf}/>
        </div>
    </div>
    }
}

export default BookSearch;