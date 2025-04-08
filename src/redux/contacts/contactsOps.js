import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Базова URL вже встановлена через axios в authOps

// 1. Отримати всі контакти
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data; // Повертаємо масив контактів
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// 2. Додати новий контакт
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data; // Повертаємо створений контакт
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// 3. Видалити контакт
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId; // Повертаємо id видаленого контакту
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// 4. Оновити контакт
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, updatedData }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, updatedData);
      return response.data; // Повертаємо оновлений контакт
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
