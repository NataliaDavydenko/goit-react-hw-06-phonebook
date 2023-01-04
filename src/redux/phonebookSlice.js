import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
}

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
      addContacts(state, action) {
          state.contacts.push(action.payload);
      },
      
     removeContacts(state, action) {
         state.contacts = state.contacts.filter(contact => contact.id !== action.payload);  
      },
      filterContacts(state, action) {
          state.filter = action.payload;
     },
  },
});

// Action creators are generated for each case reducer function
export const {addContacts, removeContacts, filterContacts} = phonebookSlice.actions;
