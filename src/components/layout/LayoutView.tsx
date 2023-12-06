import Navbar from '@/components/navbar/Navbar';
import { type LayoutInterface } from './layoutType';

const LayoutView = ({ children }: LayoutInterface) => (
  <section>
    <Navbar />
    <div>{children}</div>
  </section>
);

export default LayoutView;
