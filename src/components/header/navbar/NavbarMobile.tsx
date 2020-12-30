import React, { useState } from "react";

import styles from "../../../styles/header/navbar/Navbar.module.scss";
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
          {Data.map(({ title }, index) => {
            return (
              <li key={index} className={styles.nav_text}>
                {/* <a to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </a> */}
                <a>{title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavbarMobile;
