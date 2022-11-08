import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/actions';
import { addContact } from 'redux/operations ';
import { Formik, ErrorMessage } from 'formik';
import { getContacts } from 'redux/selectors';
import shortid from 'shortid';
import * as yup from 'yup';
import {
  FormContact,
  FormInputLabel,
  FormInput,
  FormBtn,
  FormErrorMessage,
} from './ContactFormFormik.styled';

const ContactFormFormik = () => {
  const nameInpuId = shortid.generate();
  const numberInputId = shortid.generate();
  const initialValues = { name: '', number: '' };
  const contactList = useSelector(getContacts);
  console.log('contactList in form', contactList);
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
      alert(`${name} is already in contacts`);
      return;
    }

    // dispatch(addContact({ name, number }));
    dispatch(addContact({ name, number }));
    resetForm();
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .max(20)
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required(),
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
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleOnSubmit}
    >
      <FormContact>
        <FormInputLabel htmlFor={nameInpuId}>
          Name
          <FormInput type="text" name="name" placeholder="Enter name" />
          <ErrorMessage name="name" component={FormErrorMessage} />
        </FormInputLabel>
        <FormInputLabel htmlFor={numberInputId}>
          Number
          <FormInput
            type="tel"
            name="number"
            placeholder="Enter phone number"
          />
          <ErrorMessage name="number" component={FormErrorMessage} />
        </FormInputLabel>
        <FormBtn type="submit">Add contact</FormBtn>
      </FormContact>
    </Formik>
  );
};

export default ContactFormFormik;
// ContactFormFormik.propTypes = { onSubmit: PropTypes.func.isRequired };
