import { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '@/components/postCard/PostCard';
import LastPosts from '@/components/sections/lastPosts/LastPosts';
import BASE_URL from '@/utils/baseURL';
import { IPost } from '@/types';

import styles from './HeroSection.module.scss';

const HeroSection = () => {
  const [randomCard, setRandomCard] = useState<IPost | null>(null);

  useEffect(() => {
    axios.get(`${BASE_URL}/posts/random`).then(({ data }) => {
      setRandomCard(data.data);
    });
  }, []);

  return (
    <div className={styles['hero-wrapper']}>
      <PostCard isShort card={randomCard} />
      <LastPosts />
    </div>
  );
};

export default HeroSection;
