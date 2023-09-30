import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: 'Under construction',
  reducers: {
    checkStatus: (state) => {
      if (state === 'Under construction') {
        return 'Under construction!';
      }
      return state;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
