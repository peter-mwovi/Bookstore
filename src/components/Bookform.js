import React, { useState } from 'react';

const Bookform = () => {
  const [title] = useState('');
  const [author] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  // Clear the input fields after submission
  // setTitle('');
  // setAuthor('');

  return (
    <form className="addBookForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        autoComplete="off"
        className="inputtitle"
        maxLength="50"
        required
        value={title}
      />
      <input
        type="text"
        placeholder="Author..."
        autoComplete="off"
        className="inputauthor"
        maxLength="50"
        required
        value={author}
      />
      <button type="submit" className="bookbutton">
        ADD BOOK
      </button>
    </form>
  );
};

export default Bookform;
