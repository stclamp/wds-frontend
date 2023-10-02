import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router';
import Pagination from 'rc-pagination';
import toast from 'react-hot-toast';
import PostPreview from '@/components/postPreview/PostPreview';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon';
import Spinner from '@/components/spinner/Spinner';
import { IPost } from '@/types';
import BASE_URL from '@/utils/baseURL';
import { isMobile } from '@/utils/deviceWidth';

import styles from './AllPosts.module.scss';
import '@/assets/styles/_global.scss';

const AllPosts = () => {
  const [allPosts, setAllPosts] = useState<IPost[] | null>(null);
  const [postsCount, setPostsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const pageLimit = isMobile ? '3' : '6'; // page limit for pagination
  const currentPage = searchParams.get('page'); // get current page from query string

  // isShown navigate buttons
  const isNextButtonShown =
    currentPage && +currentPage < (postsCount ?? 1) / +pageLimit;

  const isPrevButtonShown = currentPage !== '1';

  const fetchPosts = (limit: string, page: string) => {
    setIsLoading(true);

    axios
      .get(`${BASE_URL}/posts?limit=${limit}&page=${+page - 1}`)
      .then(({ data }) => {
        setAllPosts(data.data.rows);
        setPostsCount(data.data.count);
        setIsLoading(false);
      })
      .catch((error) => toast.error(error.message));
  };

  useEffect(() => {
    fetchPosts(pageLimit, currentPage || '1');
    navigate(`${location.pathname}?page=${currentPage}&limit=${pageLimit}`);
  }, []);

  const handlePageChange = (e: number) => {
    const params = new URLSearchParams({
      page: e.toString(),
      limit: pageLimit,
    });

    navigate({ pathname: location.pathname, search: params.toString() });
    fetchPosts(pageLimit, e.toString());
  };

  return (
    <section className={styles['all-posts']}>
      {isLoading ? (
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      ) : (
        <div className={styles['all-posts-wrapper']}>
          {allPosts &&
            allPosts.map((post) => <PostPreview post={post} key={post.id} />)}
        </div>
      )}
      <div className={styles['pagination-wrapper']}>
        <Pagination
          defaultCurrent={1}
          current={+currentPage!}
          className="pagination"
          total={postsCount}
          pageSize={+pageLimit}
          onChange={handlePageChange}
          jumpNextIcon={<div className="pagination-jump">...</div>}
          jumpPrevIcon={<div className="pagination-jump">...</div>}
          showLessItems={isMobile}
          prevIcon={
            isPrevButtonShown && (
              <button className={styles['prev-button']} type="button">
                <ArrowLeftIcon />
              </button>
            )
          }
          nextIcon={
            isNextButtonShown && (
              <button className={styles['next-button']} type="button">
                <ArrowRightIcon />
              </button>
            )
          }
          hideOnSinglePage
        />
      </div>
    </section>
  );
};

export default AllPosts;
