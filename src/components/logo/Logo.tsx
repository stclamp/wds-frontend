import { NavLink } from 'react-router-dom';
import LogoIcon from '@/components/icons/LogoIcon';
import LogoDarkIcon from '@/components/icons/LogoDarkIcon';
import styles from './Logo.module.scss';
import { isMobile } from '@/utils/deviceWidth';

interface LogoProps {
  isDark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark = false }) => {
  const pageLimit = isMobile ? '3' : '6';
  return (
    <div className={styles['logo-wrapper']}>
      <NavLink className={styles.link} to={`/?page=1&limit=${pageLimit}`}>
        {isDark ? <LogoDarkIcon /> : <LogoIcon />}
      </NavLink>
      {!isDark && !isMobile && (
        <div className={styles.tel}>
          <span>Need Help?</span>
          <a href="tel:(514)543-9936">(514) 543-9936</a>
        </div>
      )}
    </div>
  );
};

export default Logo;
