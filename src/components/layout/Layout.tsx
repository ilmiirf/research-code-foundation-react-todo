import LayoutView from './LayoutView';
import { type LayoutInterface } from './layoutType';

const Layout = ({ children }: LayoutInterface) => {
  return <LayoutView children={children} />;
};

export default Layout;
