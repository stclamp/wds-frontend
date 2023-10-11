import { Link } from 'react-router-dom';
import CardInfo from '@/components/cardInfo/CardInfo';
import { IPost } from '@/types';
import convertImagePath from '@/helpers/convertImagePath';

import styles from './PostPreview.module.scss';

interface PostPreviewProps {
  post: IPost | null;
}

const PostPreview: React.FC<PostPreviewProps> = ({ post }) => {
  let image;
  if (post && post.image) {
    image = convertImagePath(post.image);
  }
  return (
    <article className={styles.article}>
      <img className={styles.image} src={image} alt={post?.image_alt} />
      <Link to="/" className={styles.category}>
        {post?.category}
      </Link>
      <h3 className={styles.title}>
        <Link to="/">{post?.title}</Link>
      </h3>
      <CardInfo
        createdAt={post?.createdAt}
        author={post?.author}
        readTime={post?.read_time}
      />
    </article>
  );
};

export default PostPreview;
