import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import cls from 'classnames';
import Spinner from '@/components/spinner/Spinner';
import { IPost } from '@/types';

import styles from './PostDashboardCard.module.scss';
import '@/assets/styles/_global.scss';

interface PostDashboardCardProps {
  post?: IPost;
  updatePost: (
    post: IPost,
    data: IPost,
    setIsEdit: (arg: boolean) => void,
  ) => void;
  handleDelete: (id: number) => void;
  isLoading: boolean;
}

const PostDashboardCard: React.FC<PostDashboardCardProps> = ({
  post,
  updatePost,
  handleDelete,
  isLoading,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleStartEdit = () => {
    setIsEdit(true);
  };

  const { register, handleSubmit } = useForm<IPost>({
    defaultValues: {
      title: post?.title,
      text: post?.text,
      author: post?.author,
      category: post?.category,
      image: post?.image,
      image_alt: post?.image_alt,
      read_time: post?.read_time,
    },
  });

  // save updated post
  const onSubmit: SubmitHandler<IPost> = (data) => {
    updatePost(post!, data, setIsEdit);
  };

  return (
    <div className={styles.card}>
      {isEdit ? (
        <>
          {isLoading && (
            <div className="spinner-wrapper">
              <Spinner />
            </div>
          )}
          {!isLoading && (
            // edit post form
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <input
                className={styles.input}
                type="text"
                {...register('title', { required: true })}
              />
              <textarea
                className={styles.input}
                {...register('text', { required: true })}
              />
              <input
                className={styles.input}
                type="text"
                {...register('author', { required: true })}
              />
              <input
                className={styles.input}
                type="text"
                {...register('category', { required: true })}
              />
              <input
                className={styles.input}
                type="text"
                {...register('image', { required: true })}
              />
              <input
                className={styles.input}
                type="text"
                {...register('image_alt', { required: true })}
              />
              <input
                className={styles.input}
                type="text"
                {...register('read_time', { required: true })}
              />
              <button type="submit" className={styles.button}>
                Save
              </button>
            </form>
          )}
        </>
      ) : (
        <>
          <h3>
            <span className={styles.title}>Title: </span>
            {post?.title}
          </h3>
          <p>
            <span className={styles.title}>Text: </span>
            {post?.text}
          </p>
          <p>
            <span className={styles.title}>Author: </span>
            {post?.author}
          </p>
          <p>
            <span className={styles.title}>Category: </span>
            {post?.category}
          </p>
          <p>
            <span className={styles.title}>Image link: </span>
            {post?.image}
          </p>
          <p>
            <span className={styles.title}>Image alt: </span>
            {post?.image_alt}
          </p>
          <p>
            <span className={styles.title}>Read Time: </span>
            {post?.read_time}
          </p>
          <div className={styles['button-wrapper']}>
            <button
              className={styles.button}
              type="button"
              onClick={handleStartEdit}
            >
              Edit
            </button>
            <button
              className={cls(styles.button, styles['button-delete'])}
              type="button"
              onClick={() => handleDelete(post?.id as number)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PostDashboardCard;
