import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { selecRegError, selecAuthIsLoading } from 'redux/auth/selectors';

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
import { Formik, Field } from 'formik';
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const authError = useSelector(selecRegError);
  const authIsLoading = useSelector(selecAuthIsLoading);

  const formBackground = useColorModeValue('gray.100', 'gray.700');
  // const inputBackground = useColorModeValue('grey.500', 'gray.100');
  const handleSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
  };

  return (
    <Flex align="center" h="100vh" flexDir="column">
      <Heading mb={6} fontSize="md">
        Register
      </Heading>
      <Box p={6} rounded="md" w={64} background={formBackground}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          // onSubmit={values => {
          //   alert(JSON.stringify(values, null, 2));
          // }}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl isInvalid={!!errors.name && touched.name}>
                  <FormLabel htmlFor="name">Username</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="text"
                    variant="filled"
                    validate={value => {
                      if (value.length > 15) {
                        return 'Username should be max 15 characters.';
                      }
                    }}
                    // bg={inputBackground}
                  />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={value => {
                      if (value.length < 7) {
                        return 'Password should be over 7 characters.';
                      }
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                {authError && (
                  <FormLabel color="red">User already exist</FormLabel>
                )}
                <Button
                  type="submit"
                  colorScheme="teal"
                  w="full"
                  isLoading={authIsLoading}
                >
                  Register
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};
