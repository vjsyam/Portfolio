import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, Float, Icosahedron } from '@react-three/drei';
import Navbar from './components/Navbar';

const Home = lazy(() => import('./components/Home'));
const Experience = lazy(() => import('./components/Experience'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Projects = lazy(() => import('./components/Projects'));

const App = () => {
  return (
    <BrowserRouter>
      {/* Global 3D Background */}
      <div className="fixed inset-0 z-[-1] bg-primary">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <Icosahedron args={[1, 1]} position={[3, 1, -2]}>
              <meshStandardMaterial color="#915EFF" wireframe opacity={0.3} transparent />
            </Icosahedron>
          </Float>
          <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
            <Icosahedron args={[0.8, 1]} position={[-4, -2, -5]}>
              <meshStandardMaterial color="#00CEC9" wireframe opacity={0.2} transparent />
            </Icosahedron>
          </Float>
        </Canvas>
      </div>

      <div className="relative z-10 w-full min-h-screen">
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
      </div>
    </BrowserRouter>
  );
}

export default App;
