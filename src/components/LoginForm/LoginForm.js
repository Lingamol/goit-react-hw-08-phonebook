import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
// import css from './LoginForm.module.css';
// import { Flex, Box } from '@chakra-ui/react';
// import {
//   FormLabel,
//   FormControl,
//   Input,
//   FormErrorMessage,
//   Button,
// } from '@chakra-ui/react';
// import { Field, Form, Formik } from 'formik';
// export const LoginForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
//       <Flex alignItems="center" justifyContent="space-between">
//         <label className={css.label}>
//           Email
//           <input type="email" name="email" />
//         </label>

//         <Box>
//           <label className={css.label}>
//             Password
//             <input type="password" name="password" />
//           </label>
//           <button type="submit">Log In</button>
//         </Box>
//       </Flex>
//     </form>
//   );
// };
////////////////////////////////////////////////////////////////////////////////////////////////////////
// export const LoginForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };
//   function validateName(value) {
//     let error;
//     if (!value) {
//       error = 'Name is required';
//     } else if (value.toLowerCase() !== 'naruto') {
//       error = "Jeez! You're not a fan 😱";
//     }
//     return error;
//   }

//   return (
//     <Formik
//       initialValues={{ name: 'Sasuke' }}
//       // onSubmit={(values, actions) => {
//       //   setTimeout(() => {
//       //     alert(JSON.stringify(values, null, 2));
//       //     actions.setSubmitting(false);
//       //   }, 1000);
//       // }}
//       onSubmit={handleSubmit}
//     >
//       {props => (
//         <Form>
//           <Field name="email" validate={validateName}>
//             {({ field, form }) => (
//               <FormControl isInvalid={form.errors.name && form.touched.name}>
//                 <FormLabel>Email</FormLabel>
//                 <Input {...field} placeholder="Enter email" />
//                 <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//               </FormControl>
//             )}
//           </Field>
//           <Button
//             mt={4}
//             colorScheme="teal"
//
//             type="submit"
//           >
//             Submit
//           </Button>
//         </Form>
//       )}
//     </Formik>
//   );
// };
//////////////////////////////////////////////////////////////////////////////////////////////////
import { selecAuthError, selecAuthIsLoading } from 'redux/auth/selectors';
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
  FormHelperText,
} from '@chakra-ui/react';
import { Formik, Field } from 'formik';
export const LoginForm = () => {
  const dispatch = useDispatch();
  const authError = useSelector(selecAuthError);
  const authIsLoading = useSelector(selecAuthIsLoading);

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(
      logIn({
        email,
        password,
      })
    );
    if (!authError) {
      resetForm();
    }
  };
  // const handleOnSubmit = (values, { resetForm }) => {
  //   // console.log('values', values);
  //   // console.log('actions', actions);
  //   const { name, number } = values;
  //   if (
  //     contactList.find(
  //       contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  //     )
  //   ) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }

  //   // dispatch(addContact({ name, number }));
  //   dispatch(addContact({ name, number }));
  //   resetForm();
  // };

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w={64}>
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
                  {authError && <FormLabel>{authError}</FormLabel>}
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
