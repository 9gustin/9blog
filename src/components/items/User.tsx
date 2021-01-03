import styles from "../../styles/items/User.module.scss";

type Props = {
  src: string;
  alt: string;
};

const User: React.FC<Props> = ({ src, alt }: Props): JSX.Element => (
  <img className={styles.profileimg} src={src} alt={alt} />
);

export default User;
