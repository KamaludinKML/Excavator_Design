import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Customizer from './pages/Customizer';
import Canvas from './canvas';
import Loader from './components/Loader'; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6200); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className='app transition-all ease-in'>
      {loading ? <Loader /> : null}
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
