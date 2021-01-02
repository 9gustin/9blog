import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { NavData } from "./NavData";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <nav>
      <NavbarDesktop Data={NavData} />
      <NavbarMobile Data={NavData} />
    </nav>
  );
};

export default Navbar;
