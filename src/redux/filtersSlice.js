import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  filter: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

// Экспортируем генераторы экшенов и редюсер
export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
