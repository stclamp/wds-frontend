import { NavLink } from 'react-router-dom';
import DropdownComponent from '@/components/dropdown/DropdownComponent';
import navItems from '@/utils/navItems';

import styles from './Navbar.module.scss';

const Navbar = () => (
  <nav>
    <ul className={styles.menu}>
      {navItems.map((menu) =>
        !menu.submenu ? (
          <li className={styles['menu-item']} key={menu.id}>
            <NavLink to={menu.url}>{menu.title}</NavLink>
          </li>
        ) : (
          <li className={styles['menu-item']} key={menu.id}>
            <DropdownComponent menu={menu} />
          </li>
        ),
      )}
    </ul>
  </nav>
);

export default Navbar;
