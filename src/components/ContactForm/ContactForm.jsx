import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-slice';
import { getAllContacts } from 'redux/contacts/contacts-selectors';

import initialState from './initialState';
import css from '../ContactForm/ContactForm.module.css';

const ContactForm = () => {
  const [state, setState] = useState({ ...initialState });

  const contacts = useSelector(getAllContacts);

  const dispatch = useDispatch();

  const handleSearch = e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const isDuplicate = name => {
    const normalized = name.toLowerCase();
    const result = contacts.find(({ name }) => {
      return normalized === name.toLowerCase();
    });
    return Boolean(result);
  };

  const handleAddContact = e => {
    e.preventDefault();
    if (isDuplicate(name)) {
      alert(`${name} is already in contacts`);
      return false;
    }
    const action = addContact({ name, number });
    dispatch(action);

    setState({ ...initialState });
  };

  const { name, number } = state;

  return (
    <form className={css.wrapper} onSubmit={handleAddContact}>
      <label className={css.title}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleSearch}
          className={css.input}
        />
      </label>

      <label className={css.title}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleSearch}
          className={css.input}
        />
      </label>

      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
