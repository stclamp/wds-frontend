import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Spinner from '../components/spinner/Spinner';

const Layout = () => (
  <Suspense
    fallback={
      <div className="spinner-wrapper">
        <Spinner />
      </div>
    }
  >
    <Outlet />
  </Suspense>
);

export default Layout;
