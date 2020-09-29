import React from 'react';
import BookshelfChanger from './BookshelfChanger';

function Book(props) {
    return <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + props.book.imageLinks.thumbnail + ')' }}></div>
      <BookshelfChanger book={props.book} assignShelf={ props.assignShelf }/>
    </div>
    <div className="book-title">{props.book.title}</div>
    {props.book.authors.map((author, index) => 
      <div key={index} className="book-authors">{author}</div>
    )}
  </div>
}

export default Book;