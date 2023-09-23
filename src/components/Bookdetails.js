import React from 'react';
import PropTypes from 'prop-types';

const Bookdetails = ({ book }) => (
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
        <button type="button" className="lightbutton">Comments</button>
        <button type="button" className="lightbutton">Remove</button>
        <button type="button" className="lightbutton">Edit</button>
      </div>
    </div>
    <div className="div3">
      <button type="button" className="buttonbook">Update progress</button>
    </div>
  </>
);

Bookdetails.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Bookdetails;
