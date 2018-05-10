import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ShelfSwitcher from './ShelfSwitcher'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    switchShelf: PropTypes.func.isRequired
  }
  render() {
    const {book, books, switchShelf} = this.props
    const coverImage = book.imageLinks.thumbnail
    const title = book.title
    return (<li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
              backgroundImage: `url(${coverImage})`
            }}></div>
          <ShelfSwitcher book={book} books={books} switchShelf={switchShelf}/>
        </div>
        <div className="book-title">{title}</div>
        {book.authors ? book.authors.join(`,`): ``}
      </div>
    </li>)
  }
}

export default Book
