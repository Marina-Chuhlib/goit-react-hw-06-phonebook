import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from './types';
// import contacts from 'components/contacts';

const initialState = {
  contacts: [],
  filter: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContacts = [...state.contacts, action.payload];
      return { ...state, contacts: newContacts };

    case DELETE_CONTACT:
      const result = state.contacts.filter(item => item.id !== action.payload);
      return { ...state, contacts: result };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
