import PropTypes from 'prop-types';

import React, { useState } from 'react';

import initialState from './initialState';
import css from '../ContactForm/ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleSearch = e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setState({ ...initialState });
  };

  const { name, number } = state;

  return (
    <form className={css.wrapper} onSubmit={handleSubmit}>
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// =======================================================

// const ContactForm = ({ onSubmit }) => {

//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleSearch = e => {
//     const { value, name } = e.currentTarget;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;

//       case 'number':
//         setNumber(value);
//         break;

//       default:
//         console.log('error');
//         break;
//     }
//   };

//   const resetForm = () => {
//     setName('');
//     setNumber('');
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     onSubmit({ name, number });

//     resetForm();
//   };

//    const {name, number} = state;

//   return (
//     <form className={css.wrapper} onSubmit={handleSubmit}>
//       <label className={css.title}>
//         Name
//         <input
//           type="text"
//           name="name"
//           value={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           onChange={handleSearch}
//           className={css.input}
//         />
//       </label>

//       <label className={css.title}>
//         Number
//         <input
//           type="tel"
//           name="number"
//           value={number}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           onChange={handleSearch}
//           className={css.input}
//         />
//       </label>

//       <button type="submit" className={css.button}>
//         Add contact
//       </button>
//     </form>
//   );
// };

// export default ContactForm;

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
