import View from './HomePage.View';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/todo');
    window.location.reload();
  };
  return <View navigate={handleNavigate} />;
};

export default HomePage;
