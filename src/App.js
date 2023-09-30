import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
