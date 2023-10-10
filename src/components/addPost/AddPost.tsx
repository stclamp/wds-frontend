import { useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import cls from 'classnames';
import Spinner from '@/components/spinner/Spinner';
import { IFormDataPost } from '@/types';

import styles from './AddPost.module.scss';
import '@/assets/styles/_global.scss';

interface AddPostProps {
  createPost: (
    data: IFormDataPost,
    setIsFormOpen: (arg: boolean) => void,
  ) => void;
  isLoading: boolean;
}

const AddPost: React.FC<AddPostProps> = ({ createPost, isLoading }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const { register, handleSubmit } = useForm<IFormDataPost>();

  const uploadedImage = useRef<HTMLImageElement | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const imageSrc = URL.createObjectURL(file as Blob);
    if (file && uploadedImage && uploadedImage.current) {
      uploadedImage.current.src = imageSrc;
    }
    setIsImageUploaded(true);
  };

  const handleFormOpenToggle = () => {
    setIsFormOpen((prev) => !prev);
    setIsImageUploaded(false);
  };

  const onSubmit: SubmitHandler<IFormDataPost> = (data) => {
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
              <div>
                <input
                  {...register('image', { required: false })}
                  type="file"
                  onChange={handleImageUpload}
                />
                <img
                  ref={uploadedImage}
                  className={cls(styles.imagePreview, {
                    [styles.show]: isImageUploaded,
                  })}
                  alt="File"
                />
              </div>
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
