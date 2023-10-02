import Container from '@/components/container/Container';
import FooterColumn from '@/components/footerColumn/FooterColumn';
import Logo from '@/components/logo/Logo';
import { firstColumn, secondColumn, thirdColumn } from '@/utils/footerColumns';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <div className={styles['footer-wrapper']}>
        <FooterColumn title="Departments" links={firstColumn} />
        <FooterColumn title="Quick Links" links={secondColumn} />
        <FooterColumn title="Head Office" links={thirdColumn} isAddress />
        <div className={styles['footer-last-column']}>
          <Logo isDark />
          <p className={styles['footer-description']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            blandit tincidunt ut sed. Velit euismod integer convallis ornare eu.
          </p>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
