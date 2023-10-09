import PostCard from '@/components/postCard/PostCard';
import { IPost } from '@/types';

import styles from './RandomPost.module.scss';

interface RandomPostProps {
  card: IPost | null;
}

const RandomPost: React.FC<RandomPostProps> = ({ card }) => (
  <section className={styles['random-post-section']}>
    <PostCard card={card} />
  </section>
);
export default RandomPost;
