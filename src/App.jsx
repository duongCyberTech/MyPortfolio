// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
   ThemeProvider, createTheme, CssBaseline, Box,
   AppBar, Toolbar 
  } from '@mui/material';
import '@fontsource/montserrat';
import Home from './pages/Home.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Technology from './pages/Technologies.jsx';
import Projects from './pages/Projects.jsx';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#314158',
    },
  },
  typography: {
    fontFamily: 'Intel One Mono, monospace',
    color: '#ffffff',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: '100vw',
          overflow: 'auto',

          // Ẩn scrollbar trên Edge, Chrome, Safari
          '&::WebkitScrollbar': {
            display: 'none',
          },

          // Ẩn scrollbar trên Firefox (nếu người dùng dùng Firefox)
          scrollbarWidth: 'none',
          msOverflowStyle: 'none', // Cho IE và Edge cũ
        }}
      >
        <BrowserRouter>
        <AppBar>
          <Toolbar>
            <Header />
          </Toolbar>
        </AppBar>
        <Toolbar />

        {/* Nội dung co giãn */}
        <Box sx={{ flex: 1, overflow: 'auto', 
          '&::WebkitScrollbar': { display: 'none' }, 
          scrollbarWidth: 'none',
          width: '100%'
        }}>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/about-me' element={<AboutMe />} />
            
              <Route path='/technologies' element={<Technology />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact-me' element={<Home />} />
            </Routes>
        </Box>

        <Footer />
        </BrowserRouter>
      </Box>
      
    </ThemeProvider>
  );
}

export default App;
