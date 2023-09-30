import React from 'react';
import Booklist from './Booklist';

const Books = () => {
  const objectBooks = [];

  return (
    <div className="divbooks">
      <Booklist objectBooks={objectBooks} />
    </div>
  );
};

export default Books;
