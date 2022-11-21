import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
// import { nanoid } from 'nanoid';
import { Container, AppTitle, AppContactsListTitle } from './Contacts.styled';
import ContactFormFormik from 'components/ContactFormFormik/ContactFormFormik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations ';
import { selectContactsObj } from 'redux/contacts/selectors';
import Loader from 'components/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  IconButton,
  useToast,
  Flex,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';

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

      <Flex h="auto">
        <Box p={6} rounded="md">
          <ContactFormFormik />
        </Box>
        <Box p={6} rounded="md">
          <Filter />
          {/* {isLoading && <Loader />} */}
          {error && <p>{error}</p>}
          <div>{isLoading && 'Request in progress...'}</div>
          {contactList.length > 0 ? (
            <ContactList />
          ) : (
            <p>Add your first contact!!!</p>
          )}
        </Box>
      </Flex>
    </Container>
  );
};
export default Contacts;
