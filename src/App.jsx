import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
// Locale Files
import About from './Pages/About';
import Main from './Pages/Main';

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
            <Main />
            // <>
            //   <Container
            //     maxWidth="xl"
            //     disableGutters
            //     sx={{
            //       background: '#0A2640 ',
            //       backgroundImage: `url(${Ellipse})`,
            //       backgroundRepeat: 'no-repeat',
            //       backgroundPosition: '100% 0',
            //     }}
            //   >
            //     <Header />
            //     <Hero />
            //   </Container>

            //   <Services />
            //   <EnterpriseTemplate />
            //   <FAQ />
            //   <OurBlog />
            //   <Footer />
            // </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
