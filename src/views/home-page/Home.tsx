import HomeView from './HomeView';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/todo');
    window.location.reload();
  };
  return <HomeView navigate={handleNavigate} />;
};

export default Home;
