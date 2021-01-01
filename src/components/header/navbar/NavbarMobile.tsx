import React, { useState } from "react";

import styles from "../../../styles/header/navbar/Navbar.module.scss";
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
      <button className={styles.menu_bars} onClick={handleToggle}>
        Toggle
      </button>
      <nav className={toggleMenu ? `${styles.nav_menu} ${styles.active}` : styles.nav_menu}>
        <ul className={styles.nav_menu_items}>
          <li className={styles.navbar_toggle}>
            <button className={styles.menu_bars} onClick={handleToggle}>
              -_-
            </button>
          </li>
          {Data.map(({ title, buttonType }, i) => {
            return (
              <li key={i} className={styles.nav_text}>
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
