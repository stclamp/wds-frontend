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
  const [randomCards, setRandomCards] = useState<IPost[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/posts/random`)
      .then(({ data }) => {
        setRandomCards(data.data);
        setIsLoading(false);
      })
      .catch((error) => toast.error(error.message));
  }, []);
  return (
    <main>
      <Container>
        {isLoading ? (
          <div className="spinner-wrapper">
            <Spinner />
          </div>
        ) : (
          <>
            <HeroSection card={randomCards && randomCards[0]} />
            <RandomPost card={randomCards && randomCards[1]} />
          </>
        )}
        <AllPosts randomLoaded={!isLoading} />
      </Container>
    </main>
  );
};

export default Home;
