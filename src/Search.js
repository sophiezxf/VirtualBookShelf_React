import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    switchShelf: PropTypes.func.isRequired
  }
  state = {
    query: '',
    newBooks: []
  }
  searchBooks = (event) => {
    const query = event.target.value.trim();
    this.setState({query: query})
    if (query) {
      BooksAPI.search(query).then((books) => {
        books.length > 0
          ? this.setState({newBooks: books})
          : this.setState({newBooks: []})
      })
    } else {
      this.setState({newBooks: []})
    }
  }
  render() {
    const {query, newBooks} = this.state
    const {books, switchShelf} = this.props
    return (<div className='search-books'>
      <div className='search-books-bar'>
        <Link className='close-search' to='/'>Close</Link>
        <div className='search-books-input-wrapper'>
          <input type='text' placeholder='Search books by author or title' value={query} onChange={this.searchBooks}/>
        </div>
      </div>
      <div className='search-books-result'>
        {
          newBooks.length > 0 && (<div>
            <ol className='books-grid'>
              {newBooks.map((book) => (<Book book={book} books={books} key={book.id} switchShelf={ switchShelf }/>))}
            </ol>
          </div>)
        }
      </div>
    </div>)
  }
}
export default Search
