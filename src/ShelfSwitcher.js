import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfSwitcher extends Component {
  /* Create static PropTypes */
  static PropTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    switchShelf: PropTypes.func.isRequired,
  }
  render() {
    const {book, books, switchShelf} = this.props
    // none is default shelf
    let currShelf = 'none'
    // Find if book was in current shelf
    for (let item of books) {
      if (item.id === book.id) {
        currShelf = item.shelf
        break
      }
    }
    // Render book switcher
    return (<div className="book-shelf-changer">
      <select onChange={(event) => switchShelf(book, event.target.value)} defaultValue={currShelf}>
        <option value='none' disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>)
  }
}

export default ShelfSwitcher
