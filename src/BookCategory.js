import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class BookCategory extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired,
    switchShelf: PropTypes.func.isRequired

  }
  state = {
    selfChange: false
  }
  render() {
    const {books, switchShelf} = this.props
    const categories = [
      {
        type: 'currentlyReading',
        title: 'Currently Reading'
      }, {
        type: 'wantToRead',
        title: 'Want to Read'
      }, {
        type: 'read',
        title: 'Read'
      }
    ]
    return (<div className='list-book-content'>
      {
        categories.map((category, index) => {
          const categoryBooks = books.filter(book => book.shelf === category.type)
          return (<div className='bookshelf' key={index}>
            <h2 className='bookshelf-title'>{category.title}</h2>
            <div className='bookshelf-books'>
              <BookShelf books={categoryBooks} switchShelf={switchShelf}/>
            </div>
          </div>)
        })
      }
    </div>)
  }
}

export default BookCategory
