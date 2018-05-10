import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired,
    switchShelf: PropTypes.func.isRequired
  }
  render() {
    const { books, switchShelf } = this.props
    return (
      <ol className="books-grid">
        {books.map((book) => (
          <Book
            book={ book }
            books={ books }
            key={ book.id }
            switchShelf={ switchShelf }
          />
        ))}
      </ol>
    )
  }
}

export default BookShelf
