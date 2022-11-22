import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contacts/operations ';
import { Formik, Field } from 'formik';
import { selectContacts } from 'redux/contacts/selectors';
import * as yup from 'yup';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useColorModeValue,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react';
import { selectIsLoading } from 'redux/contacts/selectors';

const ContactFormFormik = () => {
  const isLoading = useSelector(selectIsLoading);
  const initialValues = { name: '', number: '' };
  const contactList = useSelector(selectContacts);
  const toast = useToast();
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  const dispatch = useDispatch();

  const handleOnSubmit = (values, { resetForm }) => {
    // console.log('values', values);
    // console.log('actions', actions);
    const { name, number } = values;

    if (
      contactList.find(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      toast({
        title: 'Creating contact error!',
        description: `${name} is already in contacts`,
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top',
      });

      return;
    }

    dispatch(addContact({ name, number }));
    toast({
      title: 'Contact created!',
      description: `Contact ${name} succesfuly addet to phonebook`,
      status: 'success',
      duration: 2000,
      isClosable: true,
      position: 'top',
    });
    resetForm();
  };

  const schema = yup.object().shape({
    name: yup.string().max(20).required(),
    number: yup
      .string()
      .max(10)
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required(),
  });

  return (
    <Flex align="center" h="auto" flexDir="column">
      <Box p={6} rounded="md" w={96} background={formBackground}>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleOnSubmit}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl isInvalid={!!errors.name && touched.name}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter name"
                    variant="filled"
                    validate={value => {
                      if (value.length > 32) {
                        return 'Name should be max 32 characters.';
                      }
                    }}
                  />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.number && touched.number}>
                  <FormLabel htmlFor="number">Phone number</FormLabel>
                  <Field
                    as={Input}
                    id="number"
                    name="number"
                    type="tel"
                    variant="filled"
                    placeholder="Enter phone number"
                    validate={value => {
                      if (value.length > 10) {
                        return 'Phone nomber should be max 10 characters.';
                      }
                    }}
                  />
                  <FormErrorMessage>{errors.number}</FormErrorMessage>
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="teal"
                  w="full"
                  isLoading={isLoading}
                >
                  Add contact
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default ContactFormFormik;
