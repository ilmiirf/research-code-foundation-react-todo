import ButtonView from './ButtonView';
import { type ButtonInterface } from './buttonType';

const Button = ({ classNames, children, onClick }: ButtonInterface) => {
  return (
    <ButtonView classNames={classNames} onClick={onClick} children={children} />
  );
};

export default Button;
