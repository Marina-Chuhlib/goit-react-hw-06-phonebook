import { useSelector, useDispatch } from 'react-redux';

import {
  getAllContacts,
  getFilteredContacts,
} from './redux/contacts/contacts-selectors';
import {
  addContact,
  deleteContact,
} from '../components/redux/contacts/contacts-slice';

import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

import css from './App.module.css';

const App = () => {
  const contacts = useSelector(getAllContacts);
  // console.log(contacts);

  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const isDuplicate = name => {
    const normalized = name.toLowerCase();
    const result = contacts.find(({ name }) => {
      return normalized === name.toLowerCase();
    });
    return Boolean(result);
  };

  const handleAddContact = ({ name, number }) => {
    if (isDuplicate(name)) {
      alert(`${name} is already in contacts`);
      return false;
    }

    const action = addContact({ name, number });
    dispatch(action);
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const isContacts = Boolean(contacts.length > 0);

  return (
    <div className={css.wrapper}>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={handleAddContact} />

      <h2>Contacts</h2>
      <Filter />

      {isContacts && (
        <ContactsList
          contacts={filteredContacts}
          deleteContact={handleDeleteContact}
        />
      )}
      {!isContacts && <p className={css.text}>No contacts in list</p>}
    </div>
  );
};

export default App;
