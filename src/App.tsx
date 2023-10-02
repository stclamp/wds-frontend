import { Route, Routes } from 'react-router-dom';
import Header from '@/components/header/Header';
import Layout from '@/pages/Layout';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/" element={<Home />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
