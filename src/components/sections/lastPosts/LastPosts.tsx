import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import LastPost from '@/components/lastPost/LastPost';
import { IPost } from '@/types';
import BASE_URL from '@/utils/baseURL';

import styles from './LastPosts.module.scss';

const LastPosts = () => {
  const [lastPosts, setLastPosts] = useState<IPost[] | null>(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/posts/last`)
      .then(({ data }) => setLastPosts(data.data))
      .catch((error) => toast.error(error.message));
  }, []);

  return (
    lastPosts && (
      <div className={styles['last-posts-wrapper']}>
        {lastPosts.map((post) => (
          <LastPost post={post} key={post.id} />
        ))}
      </div>
    )
  );
};

export default LastPosts;
