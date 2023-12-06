import cn from 'classnames';
import { type ReactNode } from 'react';
import './Button.css';

export interface ButtonInterface {
  children?: ReactNode;
  classNames?: string;
  onClick?: any;
}

const ButtonView = ({ classNames, children, onClick }: ButtonInterface) => (
  <button className={cn('button-base', classNames)} onClick={onClick}>
    {children}
  </button>
);

export default ButtonView;
