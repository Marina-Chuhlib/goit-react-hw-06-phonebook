import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contacts-slice';

import css from '../ContactsList/ContactsList.module.css';

const ContactsList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const elements = filteredContacts.map(({ id, name, number }) => (
    <li key={id} className={css.item}>
      <p className={css.contact}>
        {name}: <span className={css.number}>{number}</span>{' '}
      </p>
      <button
        type="button"
        className={css.button}
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  ));

  return <ul className={css.list}>{elements}</ul>;
};

export default ContactsList;
