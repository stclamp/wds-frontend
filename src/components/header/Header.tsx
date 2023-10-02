import Navbar from '@/components/navbar/Navbar';
import Logo from '@/components/logo/Logo';
import Container from '@/components/container/Container';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <Container>
      <div className={styles['nav-area']}>
        <Logo />

        <Navbar />
      </div>
    </Container>
  </header>
);

export default Header;
