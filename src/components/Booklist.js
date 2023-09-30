import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bookdetails from './Bookdetails';
import Bookform from './Bookform';
import { fetchBooks } from '../redux/books/booksSlice';

const Booklist = () => { // { objectBooks }
  const dispatch = useDispatch();
  const objectBooks = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="booklist">
      <div>
        <ul>
          {objectBooks.books.map((book) => (
            <li className="libook" key={book.id}>
              <Bookdetails key={book.item_id} book={book} />
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
};

export default Booklist;
