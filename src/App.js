import React from 'react'
// import * as BooksAPI from './data/BooksAPI'
import './App.css'
import { APIBooks } from './data/BookData';
import SearchPage from './components/SearchPage';
import BookPage from './components/BookPage';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  clickBack = () => {
    this.setState({ showSearchPage: false })
  }

  clickSearch = () => {
    this.setState({ showSearchPage: true })
  }

  render() {

    const books = APIBooks;
    
    return (
      <div className="app">
        {this.state.showSearchPage
          ? (
            <SearchPage clickBack={this.clickBack} />
          )
          : (
            <BookPage books={books} clickSearch={this.clickSearch} />
          )}
      </div>
    )
  }
}

export default BooksApp
