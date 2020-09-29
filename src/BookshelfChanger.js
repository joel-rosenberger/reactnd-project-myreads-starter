import React, {  Component } from 'react';

class BookshelfChanger extends Component {

    checkIfDisabled = (option) => {
        return ( option.disabledFor === this.props.book.shelf ||
                    option.disabledFor === "all");
    }

    render() {
        return <div className="book-shelf-changer">
        <select>
            { this.props.selectOptions.map(option => 
                <option disabled={ this.checkIfDisabled(option) } id={option.id }>{ option.label }</option>
            )}
        </select>
      </div>
    }
}

BookshelfChanger.defaultProps = {
    selectOptions: [
        { id: "move", label: "Move to...", disabledFor: "all" },
        { id: "currentlyReading", label: "Currently Reading", disabledFor: "currentlyReading" },
        { id: "wantToRead", label: "Want to Read", disabledFor: "wantToRead" },
        { id: "read", label: "Read", disabledFor: "read" },
        { id: "none", label: "None" }
    ]
};

export default BookshelfChanger;