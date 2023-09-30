import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Bookdetails = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="div1">
        <div className="bookdetails">
          <span className="categorysize">{book.category}</span>
          <span className="titlesize">{book.title}</span>
          <span className="authorsize">
            {book.author}
          </span>
        </div>
        <div>
          <button type="button" className="lightbutton1">Comments</button>
          <button
            type="button"
            className="lightbutton2"
            onClick={() => {
              dispatch(removeBook(book.id));
            }}
          >
            Remove
          </button>
          <button type="button" className="lightbutton3">Edit</button>
        </div>
      </div>
      <div className="div3">
        <button type="button" className="buttonbook">Update progress</button>
      </div>
    </>
  );
};

Bookdetails.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string,
  }).isRequired,
};

export default Bookdetails;
