import { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import cls from 'classnames';
import Spinner from '@/components/spinner/Spinner';
import BASE_URL from '@/utils/baseURL';

import styles from './Form.module.scss';

interface Inputs {
  username: string;
  password: string;
}

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsLoading(true);
    axios
      .post(
        `${BASE_URL}/login`,
        { ...data, role: 'admin' },
        { withCredentials: true },
      )
      .then(() => {
        setIsLoading(false);
        navigate('/admin/dashboard');
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };
  return isLoading ? (
    <div className="spinner-wrapper">
      <Spinner />
    </div>
  ) : (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={cls(styles.input, {
          [styles['input-error']]: errors.username,
        })}
        type="text"
        {...register('username', { required: true })}
        placeholder="Username"
      />
      {errors.username && (
        <span className={styles.error}>This field is required</span>
      )}
      <input
        className={cls(styles.input, {
          [styles['input-error']]: errors.password,
        })}
        type="password"
        {...register('password', { required: true })}
        placeholder="Password"
      />
      {errors.password && (
        <span className={styles.error}>This field is required</span>
      )}

      <button type="submit" className={styles.button}>
        Login
      </button>
    </form>
  );
};

export default Form;
