import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
// import { nanoid } from 'nanoid';
import { Container, AppTitle, AppContactsListTitle } from './Contacts.styled';
import ContactFormFormik from 'components/ContactFormFormik/ContactFormFormik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations ';
import { selectContactsObj } from 'redux/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();

  // Получаем части состояния
  const { contactList, isLoading, error } = useSelector(selectContactsObj);
  // Вызываем операцию
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <AppTitle>Phonebook</AppTitle>
      {/* <ContactForm onSubmit={heandleSubmitForm} /> */}
      <ContactFormFormik />
      <AppContactsListTitle>Contacts</AppContactsListTitle>
      <Filter />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {contactList.length > 0 && <ContactList />}
    </Container>
  );
};
export default Contacts;
