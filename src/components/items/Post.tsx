import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { HiShare } from "react-icons/hi";

import styles from "../../styles/items/Post.module.scss";
import User from "./User";

type Props = {
  profile: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
};

const Post: React.FC<Props> = ({
  profile,
  title,
  description,
  likes,
  comments,
  shares,
}: Props): JSX.Element => {
  return (
    <article className={styles.post}>
      <picture className={styles.profilePicture}>
        <User src={profile} alt="User" />
      </picture>
      <div className={styles.postText}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <hr />
      <ul className={styles.social}>
        <li>
          <button className={styles.socialButton}>
            <AiFillHeart className={styles.socialSVG} />
            <p className={styles.socialText}>{likes}</p>
          </button>
        </li>
        <li>
          <button className={styles.socialButton}>
            <BiCommentDetail className={styles.socialSVG} />
            <p className={styles.socialText}>{comments}</p>
          </button>
        </li>
        <li>
          <button className={styles.socialButton}>
            <HiShare className={styles.socialSVG} />
            <p className={styles.socialText}>{shares}</p>
          </button>
        </li>
      </ul>
    </article>
  );
};

export default Post;
