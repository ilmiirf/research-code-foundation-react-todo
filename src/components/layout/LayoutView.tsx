import { type ReactNode } from 'react';
import Navbar from '@/components/navbar/Navbar';

interface LayoutInterface {
  children: ReactNode;
}

const LayoutView = ({ children }: LayoutInterface) => (
  <section>
    <Navbar />
    <div>{children}</div>
  </section>
);

export default LayoutView;
