import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {getAllContacts} from 'components/redux/contacts/contacts-selectors';
import { deleteContact } from 'components/redux/contacts/contacts-slice';

import css from '../ContactsList/ContactsList.module.css';

const ContactsList = () => {
  const contacts = useSelector(getAllContacts);

  const dispatch = useDispatch();

    const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const elements = contacts.map(({ id, name, number }) => (
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

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

