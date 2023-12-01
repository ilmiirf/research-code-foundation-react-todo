import View from './Layout.View';
import { type ReactNode } from 'react';

interface LayoutInterface {
  children: ReactNode;
}

const Layout = ({ children }: LayoutInterface) => {
  return <View children={children} />;
};

export default Layout;
