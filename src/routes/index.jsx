import React  from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/Index';
import MainPage from '../pages/mainPage/main';
import AboutPage from '../pages/aboutPage/about';
import Loader from '../components/loader/Index';
const SinglePage = React.lazy(() => import('../pages/singlePostPage/singlePost'))
const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
            <Route path=':userId' element={
              <React.Suspense fallback={<Loader />}>
                <SinglePage />
              </React.Suspense>
            } />
            <Route index element={<MainPage />}/>
            <Route path='about' element={<AboutPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter