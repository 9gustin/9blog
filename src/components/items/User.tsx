import styles from "../../styles/items/User.module.scss";

type Props = {
  profile: string;
};

const User: React.FC<Props> = ({ profile }: Props): JSX.Element => (
  <img className={styles.profileimg} src={profile} alt="User profile" />
);

export default User;
