import React, { ReactNode } from "react";

import styles from "../../styles/header/LongHeader.module.scss";
import BackgroundImg from "../image/BackgroundImg";
import Navbar from "./navbar/Navbar";
interface Props {
  children: ReactNode;
  backgroundImageUrl?: string;
}

const LongHeader: React.FC<Props> = ({ children, backgroundImageUrl }) => {
  return (
    <header className={styles.longHeader}>
      <BackgroundImg image={backgroundImageUrl ?? ""} />
      <Navbar />
      {children}
    </header>
  );
};

export default LongHeader;
