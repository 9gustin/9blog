import styles from "../../../styles/header/navbar/NavbarDesktop.module.scss";
import SimpleButton from "../../buttons/SimpleButton";
import { TypeNavData } from "./NavData";

type Props = {
  Data: TypeNavData[];
};

const NavbarDesktop: React.FC<Props> = ({ Data }): JSX.Element => {
  return (
    <ul className={styles.navDesktop}>
      {Data.map(({ title, buttonType }, i) => (
        <SimpleButton key={i} buttonType={buttonType} onClick={console.log}>
          {title}
        </SimpleButton>
      ))}
    </ul>
  );
};

export default NavbarDesktop;
