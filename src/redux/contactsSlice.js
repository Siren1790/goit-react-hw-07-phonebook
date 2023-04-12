import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

// const contactsInitialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts:[],
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       state.contacts.push(action.payload);
  //     },
  //     prepare(name, number) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           name,
  //           number,
  //         },
  //       };
  //     },
  //   },
  //   deleteContact(state, action) {
  //     const index = state.contacts.findIndex(contact => contact.id === action.payload);
  //     state.contacts.splice(index, 1);
  //   },
  // },
  extraReducers: {
    //FETCH CONTACTS
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    }

    //ADD CONTACTS

  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
