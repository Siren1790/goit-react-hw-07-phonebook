import React, { useEffect } from 'react';
import { ContactForm, ContactList, Filter } from '..';
import { PhoneBookStyled } from './App.module.js';
import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return <PhoneBook />;
};
