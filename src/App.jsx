import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, Float, Icosahedron } from '@react-three/drei';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  useEffect(() => {
    // If the URL has a hash or path matching a section, scroll smoothly to it
    const hash = window.location.hash.replace('#', '');
    const path = window.location.pathname.replace('/', '').toLowerCase();
    const targetId = hash || path;

    if (targetId) {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const yOffset = -70;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150);
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-primary">
      {/* Global 3D Background */}
      <div className="fixed inset-0 z-0 bg-primary pointer-events-none">
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

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <Navbar />
        <main>
          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;