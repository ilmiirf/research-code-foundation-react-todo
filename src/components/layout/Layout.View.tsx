import { type ReactNode } from 'react';
import Navbar from './navbar';

interface LayoutInterface {
  children: ReactNode;
}

const View = ({ children }: LayoutInterface) => {
  return (
    <section>
      <Navbar />
      <div>{children}</div>
    </section>
  );
};

export default View;
