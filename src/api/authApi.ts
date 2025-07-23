import axios from 'axios';
import { baseUrl } from '../constants';

export const register = async (email: string, password: string): Promise<string> => {
  const response = await axios.post(`${baseUrl}/auth/register`, {
    email: email, 
    password: password
  });
  return response.data;
}

export const login = async (email: string, password: string): Promise<string> => {
  const response = await axios.post(`${baseUrl}/auth/login`, {
    email: email,
    password: password
  });
  const accessToken = response.data.accessToken;
  return accessToken;
}