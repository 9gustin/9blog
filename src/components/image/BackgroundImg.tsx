import React from "react";

import styles from "../../styles/image/BackgroundImg.module.scss";

interface Props {
  className?: string;
  image: string;
  isFixHeight?: boolean;
  isFixWidth?: boolean;
}

const BackgroundImg: React.FC<Props> = ({ className, image, isFixWidth, isFixHeight }) => {
  return (
    <picture className={`${styles.pictureBackgroundImg}`}>
      <img
        src={image}
        alt=""
        className={`${className} ${styles.headerBackgroundImg} 
        ${isFixHeight ? styles.fixHeight : ""} 
        ${isFixWidth ? styles.fixWidth : ""}`}
      />
    </picture>
  );
};

export default BackgroundImg;
