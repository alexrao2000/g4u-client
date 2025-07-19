import axios from 'axios';
import { baseUrl } from '../constants';

export const register = async (username: string, password: string): Promise<string> => {
  const response = await axios.post(`${baseUrl}auth/register`, {
    username: username, 
    password: password
  })
  return response.data
}