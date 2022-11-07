import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './contactsSlice';
axios.defaults.baseURL = 'https://6369457128cd16bba719a127.mockapi.io/api/v1';
export const fetchContacts = () => async dispatch => {
  try {
    // Индикатор загрузки
    dispatch(fetchingInProgress());
    // HTTP-запрос
    const response = await axios.get('/contacts');
    // Обработка данных
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    // Обработка ошибки
    dispatch(fetchingError(e.message));
  }
};
export const addContact = () => async dispatch => {
  try {
    // Индикатор загрузки
    dispatch(fetchingInProgress());
    // HTTP-запрос
    const response = await axios.get('/contacts');
    // Обработка данных
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    // Обработка ошибки
    dispatch(fetchingError(e.message));
  }
};
export const deleteContact = () => async dispatch => {
  try {
    // Индикатор загрузки
    dispatch(fetchingInProgress());
    // HTTP-запрос
    const response = await axios.get('/contacts');
    // Обработка данных
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    // Обработка ошибки
    dispatch(fetchingError(e.message));
  }
};
