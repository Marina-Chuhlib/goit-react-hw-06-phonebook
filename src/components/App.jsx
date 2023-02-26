import { useSelector } from 'react-redux';

import { getFilteredContacts } from '../redux/contacts/contacts-selectors';

import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

import css from './App.module.css';

const App = () => {
  const isContacts = Boolean(useSelector(getFilteredContacts).length);

  return (
    <div className={css.wrapper}>
      <h2>Phonebook</h2>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />

      {isContacts && <ContactsList />}

      {!isContacts && <p className={css.text}>No contacts in list</p>}
    </div>
  );
};

export default App;
