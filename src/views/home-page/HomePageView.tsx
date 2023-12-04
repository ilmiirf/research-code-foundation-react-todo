import Button from '@/components/button/Button';

interface TypeView {
  navigate: () => void;
}

const HomePageView = ({ navigate }: TypeView) => {
  return (
    <main className="flex flex-col justify-center h-screen gap-6 place-items-center">
      <h1 className="mb-5 text-6xl font-extrabold">
        Code Foundation React Web App
      </h1>
      <h3 className="text-sm">
        This application was built using the following technology:
      </h3>
      <h2 className="text-2xl font-medium ">
        React + Vite + Typescript + Redux Toolkit (RTK Query) + tailwind CSS +
        i18n
      </h2>
      <Button classNames="px-8 py-4 rounded-2xl mt-5" onClick={navigate}>
        Get Start
      </Button>
    </main>
  );
};

export default HomePageView;
