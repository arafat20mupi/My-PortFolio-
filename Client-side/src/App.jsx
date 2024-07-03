import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home';

function App() {
  const location = useLocation();

  // Scroll to the top when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div className=''>
      <Header />
      </div>
      <div className="container mx-auto">
        <Home />
      </div>
    </>
  );
}

export default App;