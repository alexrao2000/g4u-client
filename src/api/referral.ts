import axios from 'axios';
import { baseUrl } from '../constants';

export async function getReferralCode(): Promise<string> {
  const url = `${baseUrl}referral-code`
  
  const response = await axios.get(url, {
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  })

  const code = response.data.code

  return code
}