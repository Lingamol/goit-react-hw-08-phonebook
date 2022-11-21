import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selecLogError, selecAuthIsLoading } from 'redux/auth/selectors';
import {
  Box,
  Button,
  // ChakraProvider,
  // Checkbox,
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
export const LoginForm = () => {
  const dispatch = useDispatch();
  const authError = useSelector(selecLogError);
  const authIsLoading = useSelector(selecAuthIsLoading);
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(
      logIn({
        email,
        password,
      })
    );
  };

  return (
    <Flex align="center" h="100vh" flexDir="column">
      <Heading mb={6} fontSize="md">
        Login
      </Heading>
      <Box p={6} rounded="md" w={64} background={formBackground}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            rememberMe: false,
          }}
          // onSubmit={values => {
          //   alert(JSON.stringify(values, null, 2));
          // }}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
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
                      if (value.length < 6) {
                        return 'Password should be over 7 characters.';
                      }
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                  {authError && (
                    <FormLabel color="red">
                      Incorrect login or password{' '}
                    </FormLabel>
                  )}
                </FormControl>
                {/* <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  colorScheme="green"
                >
                  Remember me?
                </Field> */}{' '}
                <Button
                  type="submit"
                  colorScheme="teal"
                  w="full"
                  isLoading={authIsLoading}
                >
                  Login
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};
