import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import Button from './Button';

const Bookform = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the addBook action
    dispatch(addBook({ title, author }));

    // Clear the input fields after submission
    setTitle('');
    setAuthor('');
  };

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
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author..."
        autoComplete="off"
        className="inputauthor"
        maxLength="50"
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Button className="bookbutton robotoslab" onClick={handleSubmit} label="ADD BOOK" />
    </form>
  );
};

export default Bookform;
