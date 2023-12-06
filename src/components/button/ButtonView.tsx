import cn from 'classnames';
import './Button.css';
import { type ButtonInterface } from './buttonType';

const ButtonView = ({ classNames, children, onClick }: ButtonInterface) => (
  <button className={cn('button-base', classNames)} onClick={onClick}>
    {children}
  </button>
);

export default ButtonView;
