import styles from "../../styles/items/Title.module.scss";

type align = "center" | "end" | "start";

type Props = {
  children: React.ReactChild;
  align: align;
};

const Title: React.FC<Props> = ({ align, children }: Props): JSX.Element => {
  return <h2 className={`${styles.title} ${styles[align]}`}>{children}</h2>;
};

export default Title;
