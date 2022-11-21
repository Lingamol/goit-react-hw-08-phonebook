import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Container } from './Contacts.styled';
import ContactFormFormik from 'components/ContactFormFormik/ContactFormFormik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations ';
import { selectContactsObj } from 'redux/contacts/selectors';
import 'react-toastify/dist/ReactToastify.css';
import { Flex, Box } from '@chakra-ui/react';
export const Contacts = () => {
  const dispatch = useDispatch();

  const { contactList, isLoading, error } = useSelector(selectContactsObj);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
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
