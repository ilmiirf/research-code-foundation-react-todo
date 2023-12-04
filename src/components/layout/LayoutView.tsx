import { type ReactNode } from 'react';
import Navbar from './navbar/Navbar';

interface LayoutInterface {
  children: ReactNode;
}

const LayoutView = ({ children }: LayoutInterface) => {
  return (
    <section>
      <Navbar />
      <div>{children}</div>
    </section>
  );
};

export default LayoutView;
