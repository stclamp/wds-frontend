import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cls from 'classnames';
import DropdownComponent from '@/components/dropdown/DropdownComponent';
import BurgerIcon from '@/components/icons/BurgerIcon';
import navItems from '@/utils/navItems';
import { isMobile, isTablet } from '@/utils/deviceWidth';

import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuRef = useRef<HTMLUListElement | null>(null);

  const handleToggleMobileMenu = () => {
    if (isTablet || isMobile) {
      setIsMobileMenuOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    // hide mobile menu after click outside
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      // remove listener after unmount component
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <nav>
      {(isTablet || isMobile) && ( // burger menu shown on mobile and tablet
        <button
          className={styles.burger}
          type="button"
          onClick={handleToggleMobileMenu}
        >
          <BurgerIcon />
        </button>
      )}
      <ul
        className={cls(styles.menu, { [styles.open]: isMobileMenuOpen })}
        ref={menuRef}
      >
        {navItems.map((menu) =>
          !menu.submenu ? (
            <li className={styles['menu-item']} key={menu.id}>
              <NavLink
                to={menu.url}
                className={({ isActive }) =>
                  isActive ? styles['active-link'] : ''
                }
              >
                {menu.title}
              </NavLink>
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
};

export default Navbar;
