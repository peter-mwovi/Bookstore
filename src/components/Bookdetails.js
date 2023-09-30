import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import circle from '../assets/circle.png';
import Button from './Button';

const Bookdetails = ({ book }) => {
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(removeBook(book.id));
  };
  return (
    <>
      <div className="div1">
        <div className="bookdetails">
          <span className="categorysize montserrat">{book.category}</span>
          <span className="titlesize robotoslab">{book.title}</span>
          <span className="authorsize robotoslab">
            {book.author}
          </span>
        </div>
        <div>
          <button type="button" className="lightbutton1">Comments</button>
          <Button className="lightbutton2" onClick={handleRemoveBook} label="Remove" />
          <button type="button" className="lightbutton3">Edit</button>
        </div>
      </div>
      <div className="div2">
        <img className="circle" src={circle} alt="percentage" width="60px" height="60px" />
        <div>
          <p className="percentage montserrat">64%</p>
          <p className="completed montserrat">Completed</p>
        </div>
      </div>
      <div className="div3">
        <p className="chaptertext">CURRENT CHAPTER</p>
        <p className="chapter">Chapter 17</p>
        <button type="button" className="buttonbook robotoslab">UPDATE PROGRESS</button>
      </div>
    </>
  );
};

Bookdetails.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string,
  }).isRequired,
};

export default Bookdetails;
