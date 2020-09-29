import React, {  Component } from 'react';

class BookshelfChanger extends Component {
    state = {
        selectedOption: null
    }

    menuChange = (ev) => {
        const value = ev.target.value;
        console.log("menuChange:" + value);
        this.setState({
            selectedOption: ev.target.value
        }, () => this.props.assignShelf(this.props.book, value));
    }

    checkIfDisabled = (option) => {
        return (option.disabledFor === this.props.book.shelf ||
                    option.disabledFor === "all");
    }

    render() {
        return <div className="book-shelf-changer">
        <select onChange = { this.menuChange } >
            { this.props.selectOptions.map(option => 
                <option selected={ option.selected }  key={ option.id } disabled={ this.checkIfDisabled(option) } value={ option.id } >{ option.label }</option>
            )}
        </select>
      </div>
    }
}

BookshelfChanger.defaultProps = {
    selectOptions: [
        { id: "move", label: "Move to...", disabledFor: "all", selected: "true"},
        { id: "currentlyReading", label: "Currently Reading", disabledFor: "currentlyReading" },
        { id: "wantToRead", label: "Want to Read", disabledFor: "wantToRead" },
        { id: "read", label: "Read", disabledFor: "read" },
        { id: "none", label: "None" }
    ]
};

export default BookshelfChanger;