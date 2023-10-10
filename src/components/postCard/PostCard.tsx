import { Link } from 'react-router-dom';
import cls from 'classnames';
import CardInfo from '@/components/cardInfo/CardInfo';
import { IPost } from '@/types';
import convertImagePath from '@/helpers/convertImagePath';

import styles from './PostCard.module.scss';

interface PostCardProps {
  isShort?: boolean;
  card: IPost | null;
}

const PostCard: React.FC<PostCardProps> = ({ isShort = false, card }) => {
  let image;
  if (card && card.image) {
    image = convertImagePath(card.image);
  }
  return (
    <article className={styles['post-card']}>
      <div className={styles['card-wrapper']}>
        <div
          className={cls(styles['card-image'], {
            [styles['card-content-short']]: isShort,
          })}
        >
          <img src={image} alt={card?.image_alt} />
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
          <CardInfo
            createdAt={card?.createdAt}
            author={card?.author}
            readTime={card?.read_time}
          />
        </div>
      </div>
    </article>
  );
};

export default PostCard;
