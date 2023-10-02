import { Link } from 'react-router-dom';
import CardInfo from '@/components/cardInfo/CardInfo';
import { IPost } from '@/types';
import styles from './PostPreview.module.scss';

interface PostPreviewProps {
  post: IPost | null;
}

const PostPreview: React.FC<PostPreviewProps> = ({ post }) => (
  <article className={styles.article}>
    <img className={styles.image} src={post?.image} alt={post?.image_alt} />
    <Link to="/" className={styles.category}>
      {post?.category}
    </Link>
    <h3 className={styles.title}>{post?.title}</h3>
    <CardInfo
      createdAt={post?.createdAt}
      author={post?.author}
      readTime={post?.read_time}
    />
  </article>
);

export default PostPreview;
