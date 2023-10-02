import { useEffect, useMemo, useState } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router';
import axios from 'axios';
import Spinner from '@/components/spinner/Spinner';
import BASE_URL from '@/utils/baseURL';

import '@/assets/styles/_global.scss';

const RequireAuth = () => {
  const [isAuth, setIsAuth] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsAuth(false);
    axios
      .get(`${BASE_URL}/me`, { withCredentials: true })
      .then(() => {
        setIsAuth(true);
        setIsLoading(false);
      })
      .catch(() => setIsAuth(false))
      .finally(() => setIsLoading(false));
  }, []);

  const location = useLocation();

  const protectedRoute = useMemo(
    () =>
      isAuth ? (
        <Outlet />
      ) : (
        <Navigate to="/admin/login" state={{ from: location }} replace />
      ),
    [isAuth],
  );

  return isLoading ? (
    <div className="spinner-wrapper">
      <Spinner />
    </div>
  ) : (
    protectedRoute
  );
};
export default RequireAuth;
