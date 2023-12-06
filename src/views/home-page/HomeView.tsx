import Button from '@/components/button/Button';
import './Home.css';

interface TypeView {
  navigate: () => void;
}

const HomeView = ({ navigate }: TypeView) => (
  <main className="home-container">
    <h1 className="home__header">Code Foundation React Web App</h1>
    <p className="home__body">
      This application was built using the following technology:
    </p>
    <h2 className="home__sub-header">
      React + Vite + Typescript + Redux Toolkit (RTK Query) + tailwind CSS +
      i18n
    </h2>
    <Button classNames="home__button" onClick={navigate}>
      Get Start
    </Button>
  </main>
);

export default HomeView;
