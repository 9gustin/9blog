import { MouseEventHandler, ReactChild } from "react";

import styles from "../../styles/components/buttons/SimpleButton.module.scss";

type Props = {
  buttonType: "PRIMARY" | "INLINE" | "NORMAL";
  onClick: MouseEventHandler;
  children: ReactChild;
};

const SimpleButton: React.FC<Props> = ({ buttonType, onClick, children }: Props): JSX.Element => {
  let className = styles.btn + " ";
  switch (buttonType) {
    case "PRIMARY":
      className += styles.PRIMARY;
      break;
    case "INLINE":
      className += styles.INLINE;
      break;
    default:
      break;
  }
  console.log(className);
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default SimpleButton;
