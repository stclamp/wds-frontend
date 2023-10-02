import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import HeroSection from '@/components/sections/heroSection/HeroSection';
import RandomPost from '@/components/sections/randomPost/RandomPost';
import Container from '@/components/container/Container';
import Spinner from '@/components/spinner/Spinner';
import AllPosts from '@/components/sections/allPosts/AllPosts';
import { IPost } from '@/types';
import BASE_URL from '@/utils/baseURL';

import '@/assets/styles/_global.scss';

const Home = () => {
  const [randomCard, setRandomCard] = useState<IPost | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/posts/random`)
      .then(({ data }) => {
        setRandomCard(data.data);
        setIsLoading(false);
      })
      .catch((error) => toast.error(error.message));
  }, []);
  return (
    <main>
      {isLoading ? (
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      ) : (
        <Container>
          <HeroSection />
          <RandomPost randomCard={randomCard} />
          <AllPosts />
        </Container>
      )}
    </main>
  );
};

export default Home;
