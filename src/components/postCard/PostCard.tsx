import { Link } from 'react-router-dom';
import cls from 'classnames';
import Container from '@/components/container/Container';
import ClockIcon from '@/components/icons/ClockIcon';
import { ICard } from '@/types';
import convertDate from '@/helpers/convertDate';

import styles from './PostCard.module.scss';

interface PostCardProps {
  isShort?: boolean;
  card: ICard | null;
}

const PostCard: React.FC<PostCardProps> = ({ isShort = false, card }) => (
  <article className={styles['post-card']}>
    <Container>
      <div className={styles['card-wrapper']}>
        <div
          className={cls(styles['card-image'], {
            [styles['card-content-short']]: isShort,
          })}
        >
          <img src={card?.image} alt={card?.image_alt} />
        </div>
        <div
          className={cls(styles['card-content'], {
            [styles['card-content-short']]: isShort,
          })}
        >
          <Link to="/" className={styles['card-category']}>
            {card?.category}
          </Link>
          <h3 className={styles['card-title']}>{card?.title}</h3>
          <p className={styles['card-text']}>{card?.text}</p>
          <div className={styles['card-info']}>
            <span className={styles['card-date']}>
              {convertDate(card?.createdAt)}
            </span>

            <Link to="/" className={styles['card-author']}>
              {card?.author}
            </Link>
            <div className={styles['card-read-time']}>
              <ClockIcon />
              <span className={styles['card-time']}>
                {card?.read_time} min read
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </article>
);

export default PostCard;
