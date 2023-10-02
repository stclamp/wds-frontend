import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { useNavigate } from 'react-router';
import axios from 'axios';
import toast from 'react-hot-toast';
import PostsDashboardContent from '@/components/postsDashboardContent/PostsDashboardContent';
import BASE_URL from '@/utils/baseURL';

import styles from './CustomTabs.module.scss';
import 'react-tabs/style/react-tabs.css';
import '@/assets/styles/_global.scss';

const CustomTabs = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .post(`${BASE_URL}/logout`, {}, { withCredentials: true })
      .then(({ data }) => {
        navigate('/admin/login');
        toast.success(data.message);
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <Tabs>
      <div className={styles['tabs-wrapper']}>
        <TabList>
          <Tab>Posts</Tab>
          <Tab>Users</Tab>
        </TabList>
        <button className={styles.logout} type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <TabPanel>
        <PostsDashboardContent />
      </TabPanel>
      <TabPanel>
        <h2>User list</h2>
      </TabPanel>
    </Tabs>
  );
};

export default CustomTabs;
