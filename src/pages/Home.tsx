import { useNavigate } from "react-router-dom"

function Home() {

  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/register')}>Sign Up</button>
  );

}

export default Home;