import { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '@/components/postCard/PostCard';
import Spinner from '@/components/spinner/Spinner';
import { ICard } from '@/types';

const BASE_URL = import.meta.env.VITE_BACKEND_LINK;

const HeroSection = () => {
  const [randomCard, setRandomCard] = useState<ICard | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${BASE_URL}/posts/random`).then(({ data }) => {
      setRandomCard(data.data);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <div className="spinner-wrapper">
      <Spinner />
    </div>
  ) : (
    <PostCard isShort card={randomCard} />
  );
};

export default HeroSection;
