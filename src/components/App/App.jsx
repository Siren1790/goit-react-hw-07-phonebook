import React from 'react';
import { ContactForm, ContactList, Filter } from '..';
import { PhoneBookStyled } from './App.module.js';

const PhoneBook = () => {
  return (
    <PhoneBookStyled>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </PhoneBookStyled>
  );
};

export const App = () => {
  return <PhoneBook />;
};
