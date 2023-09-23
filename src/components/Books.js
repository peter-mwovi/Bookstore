import React from 'react';
import Booklist from './Booklist';

const Books = () => {
  const objectBooks = [
    {
      id: 1,
      title: 'Foundation',
      author: 'Isaac Asimov',
      category: 'Science Fiction',
      year: '1951',
    },
    {
      id: 2,
      title: 'Solaris',
      author: 'Stanislaw Lem',
      category: 'Science Fiction',
      year: '1961',
    },
  ];

  return (
    <div className="divbooks">
      <Booklist objectBooks={objectBooks} />
    </div>
  );
};

export default Books;
