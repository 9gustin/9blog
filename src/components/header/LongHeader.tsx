import React, { ReactNode } from "react";

import styles from "../../styles/header/LongHeader.module.scss";
import BackgroundImg from "../image/BackgroundImg";

interface Props {
  children: ReactNode;
  backgroundImageUrl?: string;
}

const LongHeader: React.FC<Props> = ({ children, backgroundImageUrl }) => {
  return (
    <header className={styles.longHeader}>
      <BackgroundImg image={backgroundImageUrl ?? ""} />
      {children}
    </header>
  );
};

export default LongHeader;
