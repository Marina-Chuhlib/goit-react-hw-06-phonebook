import PropTypes from 'prop-types';


import css from '../ContactsList/ContactsList.module.css';

const ContactsList = ({ contacts, deleteContact }) => {
  const elements = contacts.map(({ id, name, number }) => (
    <li key={id} className={css.item}>
      <p className={css.contact}>
        {name}: <span className={css.number}>{number}</span>{' '}
      </p>
      <button
        type="button"
        className={css.button}
        onClick={() => deleteContact(id)}
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

