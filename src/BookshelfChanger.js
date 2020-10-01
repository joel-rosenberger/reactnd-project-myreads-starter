import React, {  Component } from 'react';
import * as BooksAPI from './BooksAPI'

class BookshelfChanger extends Component {
    _isMounted = false;

    state = {
        selectedOption: null,
        shelf: "None"
    }

    componentDidMount() {
        this._isMounted = true;
        this.refreshShelf();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    refreshShelf = () => {
        BooksAPI.get(this.props.book.id)
        .then(data => {
            if (this._isMounted) {
                this.setState({
                    shelf:data.shelf
                })
            }
        });
    }

    menuChange = (ev) => {
        const value = ev.target.value;
        console.log("menuChange:" + value);
        this.setState({
            selectedOption: ev.target.value
        }, () => this.props.assignShelf(this.props.book, value, this.refreshShelf));
    }

    checkIfDisabled = (option) => {
        return (option.disabledFor === "all");
    }

    render() {
        return <div className="book-shelf-changer">
        <select onChange = { this.menuChange } value={this.state.shelf}>
            { this.props.selectOptions.map(option => 
                <option key={ option.id } disabled={ this.checkIfDisabled(option) } value={ option.id } >{ option.label }</option>
            )}
        </select>
      </div>
    }
}

BookshelfChanger.defaultProps = {
    selectOptions: [
        { id: "move", label: "Move to...", disabledFor: "all"},
        { id: "currentlyReading", label: "Currently Reading", disabledFor: "currentlyReading" },
        { id: "wantToRead", label: "Want to Read", disabledFor: "wantToRead" },
        { id: "read", label: "Read", disabledFor: "read" },
        { id: "none", label: "None" }
    ]
};

export default BookshelfChanger;