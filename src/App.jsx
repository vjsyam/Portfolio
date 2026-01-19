import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';

const Home = lazy(() => import('./components/Home'));
const Experience = lazy(() => import('./components/Experience'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Projects = lazy(() => import('./components/Projects'));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={
        <div className='flex justify-center items-center w-full h-screen bg-primary'>
          <div className="text-white text-2xl font-bold animate-pulse">Loading...</div>
        </div>
      }>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
