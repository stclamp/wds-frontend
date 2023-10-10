import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cls from 'classnames';
import DropdownComponent from '@/components/dropdown/DropdownComponent';
import CrossIcon from '@/components/icons/CrossIcon';
import BurgerIcon from '@/components/icons/BurgerIcon';
import navItems from '@/utils/navItems';

import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuRef = useRef<HTMLUListElement | null>(null);

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
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
      {!isMobileMenuOpen ? (
        <button
          className={styles.burger}
          type="button"
          onClick={handleOpenMobileMenu}
        >
          <BurgerIcon />
        </button>
      ) : (
        <button
          className={styles.burger}
          type="button"
          onClick={handleCloseMobileMenu}
        >
          <CrossIcon />
        </button>
      )}

      <ul
        className={cls(styles.menu, { [styles.open]: isMobileMenuOpen })}
        ref={menuRef}
      >
        {navItems.map((menu) =>
          !menu.submenu ? (
            <li
              className={styles['menu-item']}
              key={menu.id}
              onClick={handleCloseMobileMenu}
            >
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
              <DropdownComponent
                menu={menu}
                handleCloseMobileMenu={handleCloseMobileMenu}
              />
            </li>
          ),
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
