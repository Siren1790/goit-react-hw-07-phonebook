import React from 'react';
import { Input, Form, Button } from './ContactForm.module';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selector';
export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const submitContactForm = event => {
    event.preventDefault();

    const form = event.target;
    const [name, number] = form.elements;

    const isRepeat = contacts.some(
      element => element.name.toLowerCase() === name.value.toLowerCase()
    );

    if (isRepeat) {
      form.reset();
      return alert(`${name.value} is already in contacts`);
    }

    const newContact = {
      name: name.value,
      phone: number.value,
    };

    dispatch(addContact(newContact));
    form.reset();
  };
  return (
    <Form onSubmit={submitContactForm}>
      <h2>Name</h2>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <h2>Number</h2>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add Contacts</Button>
    </Form>
  );
};
