import { useState} from 'react';
import '../css/Auth.css';

function AuthPanel() {

  const [email, setEmail] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <div>
      <form className='form'>
        <input placeholder='Email' onChange={e => setEmail(e.target.value)}></input>
        <input placeholder='Username' onChange={e => setUsername(e.target.value)}></input>
        <input placeholder='Password' onChange={e => setPassword(e.target.value)}></input>
        <input placeholder='Confirm Password'></input>
      </form>
    </div>
  )
}

export default AuthPanel