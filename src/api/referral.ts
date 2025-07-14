import axios from 'axios';

export async function getReferralCode(): Promise<string> {
  const url = 'http://127.0.0.1:8000/referral-code'
  
  const response = await axios.get(url, {
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  })

  const code = response.data.code

  return code
}