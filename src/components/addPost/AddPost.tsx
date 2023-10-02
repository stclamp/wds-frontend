import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Spinner from '@/components/spinner/Spinner';
import { IPost } from '@/types';

import styles from './AddPost.module.scss';
import '@/assets/styles/_global.scss';

interface AddPostProps {
  createPost: (data: IPost, setIsFormOpen: (arg: boolean) => void) => void;
  isLoading: boolean;
}

const AddPost: React.FC<AddPostProps> = ({ createPost, isLoading }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormOpenToggle = () => {
    setIsFormOpen((prev) => !prev);
  };

  const { register, handleSubmit } = useForm<IPost>();

  const onSubmit: SubmitHandler<IPost> = (data) => {
    createPost(data, setIsFormOpen);
  };

  return (
    <>
      <button
        onClick={handleFormOpenToggle}
        type="button"
        className={styles.add}
      >
        +
      </button>

      {isFormOpen && (
        <div className={styles.card}>
          {isLoading && (
            <div className="spinner-wrapper">
              <Spinner />
            </div>
          )}
          {!isLoading && (
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <input
                className={styles.input}
                type="text"
                placeholder="Title"
                {...register('title', { required: true })}
              />
              <textarea
                placeholder="Text"
                className={styles.input}
                {...register('text', { required: true })}
              />
              <input
                className={styles.input}
                type="text"
                placeholder="Author"
                {...register('author', { required: true })}
              />
              <input
                className={styles.input}
                type="text"
                placeholder="Category"
                {...register('category', { required: true })}
              />
              <input
                className={styles.input}
                type="text"
                placeholder="Image"
                {...register('image', { required: true })}
              />
              <input
                className={styles.input}
                type="text"
                placeholder="Image alt"
                {...register('image_alt', { required: true })}
              />
              <input
                className={styles.input}
                type="text"
                placeholder="Read time"
                {...register('read_time', { required: true })}
              />
              <button type="submit" className={styles.button}>
                Save
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default AddPost;
