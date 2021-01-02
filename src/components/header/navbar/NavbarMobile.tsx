import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

import styles from "../../../styles/header/navbar/NavbarMobile.module.scss";
import SimpleButton from "../../buttons/SimpleButton";
import { TypeNavData } from "./NavData";

type Props = {
  Data: TypeNavData[];
};

const NavbarMobile: React.FC<Props> = ({ Data }): JSX.Element => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className={styles.navMobile}>
      <button className={styles.menuBars} onClick={handleToggle}>
        <BiMenu />
      </button>
      <nav className={toggleMenu ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
        <ul className={styles.navMenuItems}>
          <li className={styles.navbarToggle}>
            <button className={styles.menuBars} onClick={handleToggle}>
              <BiMenu />
            </button>
          </li>
          {Data.map(({ title, buttonType }, i) => {
            return (
              <li key={i} className={styles.navText}>
                <SimpleButton key={i} buttonType={buttonType} onClick={console.log}>
                  {title}
                </SimpleButton>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavbarMobile;
