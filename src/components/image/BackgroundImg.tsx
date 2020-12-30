import React from "react";

import styles from "../../styles/image/BackgroundImg.module.scss";

interface Props {
  className?: string;
  image: string;
}

const BackgroundImg: React.FC<Props> = ({ className, image }) => {
  return (
    <picture className={`${styles.pictureBackgroundImg}`}>
      <img
        src={image}
        alt=""
        className={`${className} ${styles.headerBackgroundImg} ${styles.fixHeight}`}
      />
    </picture>
  );
};

export default BackgroundImg;
