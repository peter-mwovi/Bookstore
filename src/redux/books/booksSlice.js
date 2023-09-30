import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const appId = 'K1k1N3RPPBNvJlgdPD3o';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (thunkAPI) => {
  try {
    const response = await axios.get(`${baseUrl}/${appId}/books`);
    const objectBooks = await response.data;
    const getKeys = Object.keys(objectBooks);
    let books = [];
    getKeys.forEach((key) => {
      books = [...books, { ...objectBooks[key][0], item_id: key }];
    });
    return books;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      'An error ocurred while fetching the books',
    );
  }
});

export const addBook = createAsyncThunk('books/addBook', async (newBook, thunkAPI) => {
  try {
    const response = await axios.post(`${baseUrl}/${appId}/books`, newBook, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return JSON.stringify({ message: response, book: newBook });
  } catch (error) {
    return thunkAPI.rejectWithValue(
      'An error ocurred while creating a new book',
    );
  }
});

export const removeBook = createAsyncThunk('book/removeBook', async (itemId, thunkAPI) => {
  try {
    const response = await axios.delete(`${baseUrl}/${appId}/books/${itemId}`, {
      itemId,
    },
    {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return JSON.stringify({ message: response, itemId });
  } catch (error) {
    return thunkAPI.rejectWithValue(
      'An error ocurred while deleting a book',
    );
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(addBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.isLoading = false;
      const response = JSON.parse(action.payload);
      state.books = [...state.books, response.book];
    });
    builder.addCase(addBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(removeBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removeBook.fulfilled, (state, action) => {
      state.isLoading = false;
      const response = JSON.parse(action.payload);
      state.books = state.books.filter((book) => book.item_id !== response.itemId);
    });
    builder.addCase(removeBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default booksSlice.reducer;
