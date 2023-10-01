import Dropdown from 'react-multilevel-dropdown';
import ArrowRightIcon from '@/components/Icons/ArrowRightIcon';
import ArrowDownIcon from '@/components/Icons/ArrowDownIcon';
import ArrowUpIcon from '@/components/Icons/ArrowUpIcon';
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
          {item.title}
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
                    {sub.title}
                  </Dropdown.Item>
                ))}
            </Dropdown.Submenu>
          )}
        </Dropdown.Item>
      ))}
  </Dropdown>
);

export default DropdownComponent;
