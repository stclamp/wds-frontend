import { Link } from 'react-router-dom';
import ClockIcon from '@/components/icons/ClockIcon';
import convertDate from '@/helpers/convertDate';

import styles from './CardInfo.module.scss';

interface CardInfoProps {
  createdAt?: string;
  author?: string;
  readTime?: number;
}

const CardInfo: React.FC<CardInfoProps> = ({ createdAt, author, readTime }) => (
  <div className={styles['card-info']}>
    <span className={styles['card-date']}>{convertDate(createdAt)}</span>

    <Link to="/" className={styles['card-author']}>
      {author}
    </Link>
    <div className={styles['card-read-time']}>
      <ClockIcon />
      <span className={styles['card-time']}>{readTime} min read</span>
    </div>
  </div>
);

export default CardInfo;
