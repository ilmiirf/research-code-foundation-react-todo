import cn from 'classnames';
import { type ReactNode } from 'react';

export interface ButtonInterface {
  children?: ReactNode;
  classNames?: string;
  onClick?: any;
}

const ButtonView = ({ classNames, children, onClick }: ButtonInterface) => (
  <button
    className={cn('font-medium bg-zinc-700 hover:bg-zinc-600', classNames)}
    onClick={onClick}
  >
    {children}
  </button>
);

export default ButtonView;
