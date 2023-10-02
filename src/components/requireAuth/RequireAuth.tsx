import { useEffect, useMemo, useState } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router';
import axios from 'axios';
import toast from 'react-hot-toast';
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
      .catch((error) => {
        setIsAuth(false);
        toast.error(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const location = useLocation();

  // if logged in successful => go dashboard, else => go login page
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
