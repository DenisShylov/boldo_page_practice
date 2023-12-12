import { Box } from '@mui/material';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Ellipse from './Assets/Ellipse 9.png';
import Services from './Components/Services/Services';
import EnterpriseTemplate from './Components/EterpriseTemplate/EnterpriseTemplate';
import FAQ from './Components/FAQ/FAQ';
import OurBlog from './Components/OurBlog/OurBlog';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './Pages/About';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Box
                sx={{
                  background: '#0A2640 ',
                  backgroundImage: `url(${Ellipse})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '100% 0',
                }}
              >
                <Header />
                <Hero />
              </Box>

              <Services />
              <EnterpriseTemplate />
              <FAQ />
              <OurBlog />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
