import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookCategory from './BookCategory'
import Search from './Search'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }
  /* Load all books */
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  switchShelf = (newBook, newShelf) => {
    BooksAPI.update(newBook, newShelf).then(response => {
      newBook.shelf = newShelf
      let updatedBooks = this.state.books.filter(book => book.id !== newBook.id)
      updatedBooks.push(newBook)
      this.setState({books: updatedBooks})
    })
  }

  render() {
    const {books} = this.state
    return (<div className="app">
      <Route path="/search" render={({history}) => (<Search books={books} switchShelf={this.switchShelf}/>)}/>
      <Route exact path='/' render={() => (<div className='list-books'>
          <div className='list-books-title'>
            <h1>MyReads</h1>
          </div>
          <BookCategory books={books} switchShelf={this.switchShelf}/>
          <div className='open-search'>
            <Link to='/search'>Search</Link>
          </div>
        </div>)}/>
    </div>)
  }
}

export default BooksApp
