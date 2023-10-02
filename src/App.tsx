import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/header/Header';
import Layout from '@/pages/Layout';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import Footer from './components/footer/Footer';
import RequireAuth from './components/requireAuth/RequireAuth';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<Login />} />

          {/* private routes */}
          <Route element={<RequireAuth />}>
            <Route path="admin/dashboard" element={<Dashboard />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <Toaster />

      <Footer />
    </>
  );
}

export default App;
