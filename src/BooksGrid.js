import React from 'react';
import Book from './Book';

function BooksGrid(props) {
    return <ol className="books-grid">
    {props.books
        .filter(book => (book.shelf === props.includeShelf) || !props.includeShelf)
        .map(book =>
            <li key={book.id}>
            <Book book={book}
            assignShelf = {props.assignShelf}/>
            </li>
        )}
  </ol>
}

export default BooksGrid;