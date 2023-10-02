import { NavLink } from 'react-router-dom';
import LogoIcon from '@/components/icons/LogoIcon';
import LogoDarkIcon from '@/components/icons/LogoDarkIcon';
import styles from './Logo.module.scss';

interface LogoProps {
  isDark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark = false }) => (
  <div className={styles['logo-wrapper']}>
    <NavLink to="/">{isDark ? <LogoDarkIcon /> : <LogoIcon />}</NavLink>
    {!isDark && (
      <div className={styles.tel}>
        <span>Need Help?</span>
        <a href="tel:(514)543-9936">(514) 543-9936</a>
      </div>
    )}
  </div>
);

export default Logo;
