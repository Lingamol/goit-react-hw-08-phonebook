// import { nanoid } from 'nanoid';
// import { createAction } from '@reduxjs/toolkit';

// export const addContact = createAction(
//   'contacts/addContact',
//   (name, number) => {
//     return {
//       payload: {
//         id: nanoid(),
//         name,
//         number,
//       },
//     };
//   }
// );
// export const deleteContact = createAction('contacts/deleteContact');
// export const setFilter = createAction('filters/setFilter');
///////////////////////////////////////////////////////////////////////////////
// export const addContact = ({ name, number }) => {
//   return {
//     type: 'contacts/addContact',
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// };
// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };
// // export const toggleCompleted = taskId => {
// //   return {
// //     type: 'tasks/toggleCompleted',
// //     payload: taskId,
// //   };
// // };
// export const setFilter = value => {
//   return {
//     type: 'filters/setFilter',
//     payload: value,
//   };
// };
