import { useNavigate } from "react-router-dom"

function Home() {

  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/login')}>
        Login
      </button>
      <button onClick={() => navigate('/register')}>
        Sign Up
      </button>
    </div>
  );

}

export default Home;