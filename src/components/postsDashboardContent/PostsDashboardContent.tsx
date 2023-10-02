import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import PostDashboardCard from '@/components/postDashboardCard/PostDashboardCard';
import AddPost from '@/components/addPost/AddPost';
import { IPost } from '@/types';
import BASE_URL from '@/utils/baseURL';

const PostsDashboardContent = () => {
  const [posts, setPosts] = useState<IPost[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllPosts = () => {
    setIsLoading(true);

    axios
      .get(`${BASE_URL}/posts/all`)
      .then(({ data }) => {
        setIsLoading(false);
        setPosts(data.data);
      })
      .catch((error) => toast.error(error.message))
      .finally(() => setIsLoading(false));
  };

  const updatePost = (
    post: IPost,
    data: IPost,
    setIsEdit: (arg: boolean) => void,
  ) => {
    setIsLoading(true);

    axios
      .put(`${BASE_URL}/posts/${post?.id}`, data, { withCredentials: true })
      .then(({ data: dataRes }) => {
        setIsLoading(false);
        fetchAllPosts();
        toast.success(dataRes.message);
      })
      .catch((error) => toast.error(error.message))
      .finally(() => {
        setIsLoading(false);
        setIsEdit(false);
      });
  };

  const handleDeletePost = (id: number) => {
    const isAgree = confirm('Are you shure?');

    setIsLoading(true);

    isAgree &&
      axios
        .delete(`${BASE_URL}/posts/${id}`, { withCredentials: true })
        .then(({ data }) => {
          setIsLoading(false);
          fetchAllPosts();
          toast.success(data.message);
        })
        .catch((error) => toast.error(error.message))
        .finally(() => {
          setIsLoading(false);
        });
  };

  const createPost = (data: IPost, setIsFormOpen: (arg: boolean) => void) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL}/posts`, data, { withCredentials: true })
      .then(({ data: dataRes }) => {
        fetchAllPosts();
        setIsFormOpen(false);
        setIsLoading(false);
        toast.success(dataRes.message);
      })
      .catch((error) => toast.error(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <div className="content-wrapper">
      <AddPost createPost={createPost} isLoading={isLoading} />
      {posts &&
        posts.map((post) => (
          <PostDashboardCard
            key={post.id}
            isLoading={isLoading}
            post={post}
            updatePost={updatePost}
            handleDelete={handleDeletePost}
          />
        ))}
    </div>
  );
};

export default PostsDashboardContent;
