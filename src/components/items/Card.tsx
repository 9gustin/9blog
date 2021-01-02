import React, { ReactNode } from "react";

import styles from "../../styles/items/Card.module.scss";
import BackgroundImg from "../image/BackgroundImg";

interface Props {
  children: ReactNode;
  className?: string;
  backgroundImageUrl?: string;
  isDefaultSize?: boolean;
  isBluredBackground?: boolean;
}

const Card: React.FC<Props> = ({
  children,
  className,
  backgroundImageUrl,
  isDefaultSize = true,
  isBluredBackground,
}) => {
  return (
    <div
      className={`
      ${styles.card} 
      ${isDefaultSize && styles.defaultSize} 
      ${className} 
      ${isBluredBackground && styles.bluredBackground}
      `}>
      <BackgroundImg
        image={backgroundImageUrl ?? ""}
        className={styles.backgroundImage}
        isFixWidth
      />
      {children}
    </div>
  );
};

export default Card;
