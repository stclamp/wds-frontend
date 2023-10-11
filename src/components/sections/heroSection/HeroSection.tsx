import PostCard from '@/components/postCard/PostCard';
import LastPosts from '@/components/sections/lastPosts/LastPosts';
import { IPost } from '@/types';

import styles from './HeroSection.module.scss';

interface HeroSectionProps {
  card: IPost | null;
}

const HeroSection: React.FC<HeroSectionProps> = ({ card }) => (
  <div className={styles['hero-wrapper']}>
    <PostCard isShort card={card} />
    <LastPosts />
  </div>
);
export default HeroSection;
