import React from 'react';
import { useSelector } from 'react-redux';
import Bookdetails from './Bookdetails';
import Bookform from './Bookform';

function Booklist() { // { objectBooks }
  const objectBooks = useSelector((state) => state.books);
  return (
    <div className="booklist">
      <div>
        <div className="bookslisth3">
          <h3>Books list...</h3>
        </div>
        <ul>
          {objectBooks.map((book) => (
            <li className="libook" key={book.id}>
              <Bookdetails key={book.id} book={book} />
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="divnewbook">
        <h4 className="newbook montserrat">ADD NEW BOOK</h4>
        <Bookform />
      </div>
      <div className="bottom" />
    </div>
  );
}

export default Booklist;
