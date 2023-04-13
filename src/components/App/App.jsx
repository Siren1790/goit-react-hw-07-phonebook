import React, { useEffect } from 'react';
import { ContactForm, ContactList, Filter } from '..';
import { PhoneBookStyled } from './App.module.js';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selector';

const PhoneBook = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  return (
    <PhoneBookStyled>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
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
