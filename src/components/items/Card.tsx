import React, { ReactNode } from "react";

import styles from "../../styles/items/Card.module.scss";

interface Props {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<Props> = ({ children, className }) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export default Card;
