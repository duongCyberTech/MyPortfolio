import React,{useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import '@fontsource/montserrat'; // import font 1 lần ở đây
import {Link} from '@mui/material'
import {Cancel} from '@mui/icons-material'
import GameOverPanel from '../components/Panel'

const StyleHome = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  fontWeight: '900',
  scrollbarWidth: 'none',
  '&::WebkitScrollbar': {
    display: 'none',
  },  
}));

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1000);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1000);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);
  return (
    <>
    <StyleHome
      style={{
        display: 'flex',
        padding: '40px',
        flexDirection: isDesktop ? 'row' : 'column',
        gap: isDesktop ? '100px' : '30px',
        justifyItems: 'center',
        alignItems: 'center',       // căn giữa theo chiều dọc
        justifyContent: 'center',   // căn giữa theo chiều ngang
        height: 'auto',            // chiếm toàn bộ chiều cao màn hình
        width: '100%',
        textAlign: 'center',    
      }}
    >
        <div>
            <h4 style={{textAlign:'left',margin: '0', color: '#90A1B9'}}>Hi all. I am</h4>
            <h1 style={{textAlign:'left', margin: '0', color: '#fff'}}>Mai Dang Duong</h1>
            <h2 style={{textAlign:'left', margin: '0', color: '#615FFF'}}>{'> '}Full-Stack Developer</h2>
            <h5 style={{textAlign:'left',margin: '0', color: '#90A1B9', marginTop: "50px"}}>// This is my porfolio.</h5>
            <h5 style={{textAlign:'left',margin: '0', color: '#90A1B9'}}>// All about my coding carreer is right here.</h5>
            <h4 style={{textAlign:'left',margin: '0', color: '#90A1B9'}}>
              <span style={{color: '#615FFF'}}>const</span>{' '}
              <span style={{color: '#00D5BE'}}>github</span>{' = '}
              <Link href='https://github.com/duongCyberTech' style={{color: '#FFA1AD'}} underline='hover' target='_blank'>"https://github.com/duongCyberTech"</Link>
            </h4>
        </div>
        <GameOverPanel/>
    </StyleHome>      
    </>

  );
};

export default Home;
