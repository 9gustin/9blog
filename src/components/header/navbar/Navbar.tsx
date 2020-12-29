import styles from "../../../styles/header/navbar/Navbar.module.scss";
import SimpleButton from "../../buttons/SimpleButton";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li>
          <SimpleButton onClick={() => console.log("a")} buttonType={"NORMAL"}>
            Get App
          </SimpleButton>
        </li>
        <li>
          <SimpleButton onClick={() => console.log("a")} buttonType={"NORMAL"}>
            Features
          </SimpleButton>
        </li>
        <li>
          <SimpleButton onClick={() => console.log("a")} buttonType={"NORMAL"}>
            About
          </SimpleButton>
        </li>
        <li>
          <SimpleButton onClick={() => console.log("a")} buttonType={"NORMAL"}>
            F.A.Q
          </SimpleButton>
        </li>
        <li>
          <SimpleButton onClick={() => console.log("a")} buttonType={"NORMAL"}>
            Sign In
          </SimpleButton>
        </li>
        <li>
          <SimpleButton onClick={() => console.log("a")} buttonType={"PRIMARY"}>
            Sign Up
          </SimpleButton>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
