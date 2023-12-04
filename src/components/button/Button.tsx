import ButtonView, { type ButtonInterface } from './ButtonView';

const Button = ({ classNames, children, onClick }: ButtonInterface) => {
  return (
    <ButtonView classNames={classNames} onClick={onClick} children={children} />
  );
};

export default Button;
