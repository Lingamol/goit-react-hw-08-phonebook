// import { statusFilters } from './constants';
// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, setFilter, deleteContact } from './actions';

// const contactsInitialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// export const contactsReducer = createReducer(contactsInitialState, {
//   [addContact]: (state, action) => {
//     return [...state, action.payload];
//   },
//   [deleteContact]: (state, action) => {
//     return state.filter(contact => contact.id !== action.payload);
//   },
// });
///////////////////////////////////////////////////////////////////////
//   switch (action.type) {
//     case addContact.type:
//       return [...state, action.payload];
//     case deleteContact.type:
//       return state.filter(contact => contact.id !== action.payload);
//     // case 'contacts/toggleCompleted':
//     //   return state.map(task => {
//     //     if (task.id !== action.payload) {
//     //       return task;
//     //     }
//     //     return { ...task, completed: !task.completed };
//     //   });
//     default:
//       return state;
//   }
// };
/////////////////////////////////////////////////////////////////////////
// const filtersInitialState = {
//   filter: '',
// };

// export const filtersReducer = createReducer(filtersInitialState, {
//   [setFilter]: (state, action) => {
//     return {
//       ...state,
//       filter: action.payload,
//     };
//   },
// });

// // Код редюсеров tasksReducer и filtersReducer
// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filters: filtersReducer,
// });
