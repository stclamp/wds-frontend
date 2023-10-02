import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IPost } from '@/types';

import styles from './AddPost.module.scss';

interface AddPostProps {
  createPost: (data: IPost, setIsFormOpen: (arg: boolean) => void) => void;
}

const AddPost: React.FC<AddPostProps> = ({ createPost }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormOpen = () => {
    setIsFormOpen(true);
  };

  const { register, handleSubmit } = useForm<IPost>();

  const onSubmit: SubmitHandler<IPost> = (data) => {
    createPost(data, setIsFormOpen);
  };

  return (
    <>
      <button onClick={handleFormOpen} type="button" className={styles.add}>
        +
      </button>
      {isFormOpen && (
        <div className={styles.card}>
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
        </div>
      )}
    </>
  );
};

export default AddPost;
