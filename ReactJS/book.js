import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          isbn: '12345',
          title: 'Alices adventures in wonderland',
          author: 'Lewis Carroll',
          publisher: 'Palazzo Editions Ltd, 2017',
          category: 'Novel',
          price: '$190.55'
        },
        {
          isbn: '098765',
          title: 'Treasure Island',
          author: 'Robert Louis Stevenson, N.C. Wyeth',
          publisher: 'Scribner,New York,1981',
          category: 'Science',
          price: '$21.43'
        },
        {
          isbn: '567890',
          title: 'Pride and prejudice',
          author: 'Jane Austen',
          publisher: 'Modern Library, New York,1995',
          category: 'Novel',
          price: '$15.72'
        },
        {
            isbn: '867865',
            title: 'Gullivers travels',
            author: 'Jonathan Swift',
            publisher: 'Knopf: Distributed by Random House,new york,[1991]',
            category: 'Novel',
            price: '$23.25'
          },
          {
            isbn: '1678355',
            title: 'A Christmas carol',
            author: 'Charles Dickens',
            publisher: 'HarperCollins Childrens books,new york,2009',
            category: 'Novel',
            price: '$16.32'
          },
          {
            isbn: '6756893',
            title: 'Math Curse',
            author: 'Jon Scieszka',
            publisher: 'October 1,1995',
            category: 'Math',
            price: '$15.72'
          }
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>Books</h2>
        <table>
          <thead>
            <tr>
              <th>ISBN</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.books.map((book, index) => (
              <tr key={index}>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.category}</td>
                <td>{book.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Book;
