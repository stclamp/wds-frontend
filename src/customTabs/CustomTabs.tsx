import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import PostsDashboardContent from '@/components/postsDashboardContent/PostsDashboardContent';

import 'react-tabs/style/react-tabs.css';

const CustomTabs = () => (
  <Tabs>
    <TabList>
      <Tab>Posts</Tab>
      <Tab>Users</Tab>
    </TabList>

    <TabPanel>
      <PostsDashboardContent />
    </TabPanel>
    <TabPanel>
      <h2>User list</h2>
    </TabPanel>
  </Tabs>
);

export default CustomTabs;
