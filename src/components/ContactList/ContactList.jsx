// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/actions';
import { deleteContact } from 'redux/contacts/operations ';
import {
  // selectContacts,
  // selectFilter,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { ListItemText, ListItemBtn } from './ContactList.sryled';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  IconButton,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  Button,
  useToast,
  Flex,
  Box,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { PhoneIcon, AddIcon, WarningIcon, DeleteIcon } from '@chakra-ui/icons';

import { selectIsLoading, selectError } from 'redux/contacts/selectors';
// const getVisibleContacts = (contacts, filterContact) => {
//   const normalizedFilter = filterContact.toLowerCase();
//   const visibleContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
//   return visibleContacts ? visibleContacts : [];
// };

const ContactList = () => {
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  // const error = useSelector(selectError);
  // const isLoading = useSelector(selectIsLoading);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  // const contactList = useSelector(selectContacts);
  // console.log('contactList', contactList);
  // console.log('filter', filter);
  // const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const toast = useToast();
  // const visibleContacts = getVisibleContacts(contactList, filter);
  const visibleContacts = useSelector(selectVisibleContacts);
  // const visibleContacts = contacts;
  // console.log('visibleContacts', visibleContacts);
  const handleDeleteContact = (contactId, contactName) => {
    dispatch(deleteContact(contactId));
    toast({
      title: 'Contact deleted!',
      description: `Contact ${contactName} succesfuly deleted from phonebook`,
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top',
    });
  };

  // if (visibleContacts.length === 0) return;
  return (
    <Flex align="center" h="auto" flexDir="column">
      <Box p={6} rounded="md" w={96}>
        <Heading mb={6} fontSize="md">
          Contacts
        </Heading>
        <List spacing={3}>
          {visibleContacts.map(({ id, name, number }) => (
            <ListItem key={id}>
              <Flex align="center" h="auto" flexDir="column">
                <Box p={6} rounded="md" w={96} background={formBackground}>
                  <ListIcon as={PhoneIcon} color="green.500" />
                  <ListItemText>{name}</ListItemText>
                  <ListItemText>{number}</ListItemText>
                  <IconButton
                    colorScheme="red"
                    aria-label="Delete contact"
                    size="sm"
                    icon={<DeleteIcon />}
                    // onClick={() => handleDeleteContact(id)}
                    onClick={onOpen}
                    variant="outline"
                    // isLoading={isLoading}
                  />
                </Box>
              </Flex>
              <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
              >
                <AlertDialogOverlay />

                <AlertDialogContent>
                  <AlertDialogHeader>Cancel Changes?</AlertDialogHeader>
                  <AlertDialogCloseButton />
                  <AlertDialogBody>
                    Are you sure you want to delete contact {name}?
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      No
                    </Button>
                    <Button
                      colorScheme="teal"
                      onClick={() => {
                        handleDeleteContact(id, name);
                        onClose();
                      }}
                      ml={3}
                    >
                      Yes
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </ListItem>
          ))}
        </List>
      </Box>
    </Flex>
  );

  //   <List>
  //     {visibleContacts.map(({ id, name, number }) => (
  //       <ListItem key={id}>
  //         <ListItemText>{name}</ListItemText>
  //         <ListItemText>{number}</ListItemText>
  //         <ListItemBtn onClick={() => handleDeleteContact(id)}>
  //           Delete
  //         </ListItemBtn>
  //       </ListItem>
  //     ))}
  //   </List>
  // );
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
