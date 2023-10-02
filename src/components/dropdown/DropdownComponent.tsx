import { NavLink } from 'react-router-dom';
import Dropdown from 'react-multilevel-dropdown';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';
import ArrowDownIcon from '@/components/icons/ArrowDownIcon';
import ArrowUpIcon from '@/components/icons/ArrowUpIcon';
import { INavItem } from '@/types';

import styles from './Dropdown.module.scss';

interface DropdownProps {
  menu: INavItem;
}

const DropdownComponent: React.FC<DropdownProps> = ({ menu }) => (
  <Dropdown
    key={menu.id}
    title={
      <>
        {menu.title}

        <>
          <div className={styles.up}>
            <ArrowUpIcon />
          </div>
          <div className={styles.down}>
            <ArrowDownIcon />
          </div>
        </>
      </>
    }
    buttonClassName={styles.dropdown}
    menuClassName={styles['dropdown-menu']}
  >
    {menu.submenu &&
      menu.submenu.map((item) => (
        <Dropdown.Item key={item.id} className={styles['dropdown-item']}>
          <NavLink to={item.url as string}>{item.title}</NavLink>
          {item.submenu && <ArrowRightIcon />}
          {item.submenu && (
            <Dropdown.Submenu
              position="right"
              className={styles['dropdown-submenu']}
            >
              {item.submenu &&
                item.submenu.map((sub) => (
                  <Dropdown.Item
                    key={sub.id}
                    className={styles['dropdown-item']}
                  >
                    <NavLink to={sub.url as string}>{sub.title}</NavLink>
                  </Dropdown.Item>
                ))}
            </Dropdown.Submenu>
          )}
        </Dropdown.Item>
      ))}
  </Dropdown>
);

export default DropdownComponent;
