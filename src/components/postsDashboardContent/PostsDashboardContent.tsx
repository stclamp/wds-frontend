import { useEffect, useState } from 'react';
import axios from 'axios';
import PostDashboardCard from '@/components/postDashboardCard/PostDashboardCard';
import AddPost from '@/components/addPost/AddPost';
import { IPost } from '@/types';
import BASE_URL from '@/utils/baseURL';

const PostsDashboardContent = () => {
  const [posts, setPosts] = useState<IPost[] | null>(null);

  const fetchAllPosts = () => {
    axios.get(`${BASE_URL}/posts/all`).then(({ data }) => setPosts(data.data));
  };

  const updatePost = (
    post: IPost,
    data: IPost,
    setIsEdit: (arg: boolean) => void,
  ) => {
    axios
      .put(`${BASE_URL}/posts/${post?.id}`, data, { withCredentials: true })
      .then(() => fetchAllPosts())
      .catch((error) => console.log(error))
      .finally(() => setIsEdit(false));
  };

  const handleDeletePost = (id: number) => {
    const isAgree = confirm('Are you shure?');
    isAgree &&
      axios
        .delete(`${BASE_URL}/posts/${id}`, { withCredentials: true })
        .then(() => fetchAllPosts())
        .catch((error) => console.log(error));
  };

  const createPost = (data: IPost, setIsFormOpen: (arg: boolean) => void) => {
    axios
      .post(`${BASE_URL}/posts`, data, { withCredentials: true })
      .then(() => {
        fetchAllPosts();
        setIsFormOpen(false);
      });
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <div className="content-wrapper">
      <AddPost createPost={createPost} />
      {posts &&
        posts.map((post) => (
          <PostDashboardCard
            key={post.id}
            post={post}
            updatePost={updatePost}
            handleDelete={handleDeletePost}
          />
        ))}
    </div>
  );
};

export default PostsDashboardContent;
