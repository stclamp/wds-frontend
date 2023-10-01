import { NavLink } from 'react-router-dom';
import LogoIcon from '@/components/icons/LogoIcon';
import styles from './Logo.module.scss';

const Logo = () => (
  <div className={styles['logo-wrapper']}>
    <NavLink to="/">
      <LogoIcon />
    </NavLink>
    <div className={styles.tel}>
      <span>Need Help?</span>
      <a href="tel:(514)543-9936">(514) 543-9936</a>
    </div>
  </div>
);

export default Logo;
