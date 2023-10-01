import PostCard from '@/components/postCard/PostCard';
import { IPost } from '@/types';

import styles from './RandomPost.module.scss';

interface RandomPostProps {
  randomCard: IPost | null;
}

const RandomPost: React.FC<RandomPostProps> = ({ randomCard }) => (
  <section className={styles['random-post-section']}>
    <PostCard card={randomCard} />
  </section>
);

export default RandomPost;
