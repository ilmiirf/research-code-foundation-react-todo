import LayoutView from './LayoutView';
import { type ReactNode } from 'react';

interface LayoutInterface {
  children: ReactNode;
}

const Layout = ({ children }: LayoutInterface) => {
  return <LayoutView children={children} />;
};

export default Layout;
