import Button from '@/components/button/Button';

interface TypeView {
  navigate: () => void;
}

const View = ({ navigate }: TypeView) => {
  return (
    <main className="flex flex-col justify-center h-screen gap-10 place-items-center">
      <h1 className="text-6xl font-extrabold">Code Foundation React Web App</h1>
      <h2 className="text-2xl font-medium ">
        React + Vite + Typescript + Redux Toolkit (RTL Query) + tailwind CSS +
        i18n
      </h2>
      <Button classNames="px-8 py-4 rounded-2xl" onClick={navigate}>
        Get Start
      </Button>
    </main>
  );
};

export default View;
