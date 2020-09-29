import React from 'react';
import Book from './Book'

function Bookshelf(props) {
return <div className="bookshelf">
<h2 className="bookshelf-title">{props.title}</h2>
<div className="bookshelf-books">
  <ol className="books-grid">
    {props.books
        .filter(book => book.shelf === props.id)
        .map(book =>
            <li key={ book.id }>
            <Book book={ book }
            assignShelf = { props.assignShelf }/>
            </li>
        )}
  </ol>
</div>
</div>
}

export default Bookshelf;