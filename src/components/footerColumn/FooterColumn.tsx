import { NavLink } from 'react-router-dom';
import { useCallback } from 'react';
import GeoIcon from '@/components/icons/GeoIcon';
import EnvelopeIcon from '@/components/icons/EnvelopeIcon';
import PhoneIcon from '@/components/icons/PhoneIcon';
import { IFooterLink } from '@/types';

import styles from './FooterColumn.module.scss';

interface FooterColumnProps {
  title: string;
  links: IFooterLink[];
  isAddress?: boolean;
}

const FooterColumn: React.FC<FooterColumnProps> = ({
  title,
  links,
  isAddress = false,
}) => {
  const getIcon = useCallback((icon: string) => {
    switch (icon) {
      case 'geo':
        return <GeoIcon />;
      case 'envelope':
        return <EnvelopeIcon />;
      case 'phone':
        return <PhoneIcon />;
      default:
        return '';
    }
  }, []);
  return (
    <div className={styles['footer-column']}>
      <h4 className={styles.title}>{title}</h4>
      <ul className={styles['footer-column-list']}>
        {links.map((link) => (
          <li className={styles['footer-column-item']} key={link.title}>
            <NavLink
              className={styles.link}
              to={link.url}
              target={isAddress ? '_blank' : ''}
            >
              {link.icon && getIcon(link.icon)}
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
