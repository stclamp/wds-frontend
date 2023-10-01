import { Route, Routes } from 'react-router-dom';
import Header from '@/components/header/Header';
import Layout from '@/pages/Layout';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/" element={<Home />} />

          {/* private routes */}

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
