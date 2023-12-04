import HomePageView from './HomePageView';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/todo');
    window.location.reload();
  };
  return <HomePageView navigate={handleNavigate} />;
};

export default HomePage;
