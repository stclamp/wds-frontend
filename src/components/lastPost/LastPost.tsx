import { Link } from 'react-router-dom';
import { IPost } from '@/types';
import convertDate from '@/helpers/convertDate';

import styles from './LastPost.module.scss';

interface LastPostProps {
  post: IPost | null;
}

const LastPost: React.FC<LastPostProps> = ({ post }) => (
  <Link
    className={styles['last-post']}
    style={{
      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(${post?.image}), lightgray`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      display: 'block',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = `linear-gradient(0deg, rgba(8, 128, 174, 0.80) 0%, rgba(8, 128, 174, 0.80) 100%), url(${post?.image}), lightgray`;
      e.currentTarget.style.backgroundPosition = `center center`;
      e.currentTarget.style.backgroundSize = 'cover';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(${post?.image}), lightgray`;
      e.currentTarget.style.backgroundPosition = `center center`;
      e.currentTarget.style.backgroundSize = 'cover';
    }}
    to="/"
  >
    <h4 className={styles['last-post-title']}>{post?.title}</h4>
    <span className={styles['last-post-date']}>
      {convertDate(post?.createdAt)}
    </span>
  </Link>
);

export default LastPost;
