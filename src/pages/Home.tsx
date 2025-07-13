import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

function Home() {
  const [referralCode] = useState<string>('ABC123'); // Placeholder

  return (
    <div>
      <h1>Your Referral Link</h1>
      <code>{`${window.location.origin}/register?ref=${referralCode}`}</code>
    </div>
  )
}

export default Home;