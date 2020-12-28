type Props = {
  text: string;
  text_color: string;
  background: string;
};

const SimpleButton = ({ text, text_color, background }: Props): JSX.Element => {
  return <button className={`text-${text_color} bg-${background}`}>{text}</button>;
};

export default SimpleButton;
