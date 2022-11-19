// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/actions';
import { deleteContact } from 'redux/contacts/operations ';
import {
  // selectContacts,
  // selectFilter,
  selectVisibleContacts,
} from 'redux/selectors';
import {
  ListItemText,
  ListItem,
  List,
  ListItemBtn,
} from './ContactList.sryled';

// const getVisibleContacts = (contacts, filterContact) => {
//   const normalizedFilter = filterContact.toLowerCase();

//   const visibleContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
//   return visibleContacts ? visibleContacts : [];
// };

const ContactList = () => {
  // const contactList = useSelector(selectContacts);
  // console.log('contactList', contactList);
  // console.log('filter', filter);
  // const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  // const visibleContacts = getVisibleContacts(contactList, filter);
  const visibleContacts = useSelector(selectVisibleContacts);
  // const visibleContacts = contacts;
  // console.log('visibleContacts', visibleContacts);
  const handleDeleteContact = contactId => dispatch(deleteContact(contactId));
  // if (visibleContacts.length === 0) return;
  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ListItemText>{name}</ListItemText>
          <ListItemText>{number}</ListItemText>
          <ListItemBtn onClick={() => handleDeleteContact(id)}>
            Delete
          </ListItemBtn>
        </ListItem>
      ))}
    </List>
  );
};
export default ContactList;
// onClick={() => onDelContact(id)}
// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDelContact: PropTypes.func.isRequired,
// };
