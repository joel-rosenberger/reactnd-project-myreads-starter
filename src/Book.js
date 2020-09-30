import React from 'react';
import BookshelfChanger from './BookshelfChanger';

function Book(props) {
    let thumbnail;
    if (!props.book.imageLinks) {
      thumbnail = "";
    } else {
      thumbnail = props.book.imageLinks.thumbnail;
    }
    return <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + thumbnail + ')' }}></div>
      <BookshelfChanger book={props.book} assignShelf={ props.assignShelf }/>
    </div>
    <div className="book-title">{props.book.title}</div>
    {props.book.authors && props.book.authors.map((author, index) => 
      <div key={index} className="book-authors">{author}</div>
    )}
  </div>
}

export default Book;