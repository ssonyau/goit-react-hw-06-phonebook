const { createSlice } = require('@reduxjs/toolkit');
const contactsInitialState = [];
const filterInitialState = '';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContactRedux(state, action) {
      // console.log('state', state);
      state.push(action.payload);
    },
    removeContactRedux(state, action) {
      return state.filter(contact => contact.key !== action.payload);
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    addFilterRedux(state, action) {
      return action.payload;
    },
  },
});

export const { addContactRedux, removeContactRedux } = contactsSlice.actions;
export const { addFilterRedux } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const contactsReducer = contactsSlice.reducer;
