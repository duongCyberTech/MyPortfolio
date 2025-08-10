import React, {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Switch from './SwitchTemplate.jsx';
import '@fontsource/montserrat'; // mặc định 400
import {useNavigate, useLocation} from 'react-router-dom'

const Item = styled('div')(({ theme, isActive }) => ({
  backgroundColor: '#314158',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: isActive ? '#ffffff' : '#90A1B9',
  fontFamily: 'Intel One Mono',
  fontWeight: '800',
  cursor: 'pointer',
  border: '1px solid #90A1B9',
  borderBottom: isActive ? '5px solid orange' : '1px solid #90A1B9',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  boxSizing: 'border-box',
  transition: 'all 0.1s ease',
}));

const StyleHeader = styled('header')(({ theme }) => ({
  backgroundColor: '#314158',
  zIndex: theme.zIndex.appBar,
  boxShadow: theme.shadows[4],
  padding: theme.spacing(0, 0),
}));


export default function Header() {
  const [activeItem, setActiveItem] = useState('_hello');
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1123);
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActiveItem('_hello');
    else if (path === '/about-me') setActiveItem('_about_me');
    else if (path === '/technologies') setActiveItem('_technologies');
    else if (path === '/projects') setActiveItem('_projects');
    else if (path === '/contact-me') setActiveItem('_contact_me');
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1123);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup khi component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <StyleHeader
      style={{
          position: 'fixed',
          width: '100vw',
          top: 0,
          left: 0,
      }}  
    >
      <Grid container spacing={0} width='100%' wrap="nowrap">
        <Grid item xs={4} width='20%' style={{minWidth:'271px', borderLeft: '0px'}}>
          <Item style={{ justifyContent: 'flex-start', paddingLeft:'20px' }}>
            mai_dang_duong
          </Item>
        </Grid>
        <div style={{display: isLargeScreen ? 'flex': 'none'}}>
          <Grid item xs={2} width='10%' style={{minWidth: "150px"}}>
            <Item onClick={() => {setActiveItem('_hello'); navigate('/')}} isActive={activeItem === '_hello'}>
              _hello
            </Item>
          </Grid>
          <Grid item xs={2} width='10%' style={{minWidth: "150px"}}>
            <Item onClick={() => {setActiveItem('_about_me'); navigate('/about-me')}} isActive={activeItem === '_about_me'}>
              _about_me
            </Item>
          </Grid>
          <Grid item xs={2} width='10%' style={{minWidth: "150px"}}>
            <Item onClick={() => {setActiveItem('_technologies'); navigate('/technologies')}} isActive={activeItem === '_technologies'}>
              _technologies
            </Item>
          </Grid>
          <Grid item xs={2} width='10%' style={{minWidth: "150px"}}>
            <Item onClick={() => {setActiveItem('_projects'); navigate('/projects')}} isActive={activeItem === '_projects'}>
              _projects
            </Item>
          </Grid>
          {/* <Grid item xs={2} width='10%' style={{minWidth: "150px"}}>
            <Item onClick={() => {setActiveItem('_contact_me'); navigate('/contact-me')}} isActive={activeItem === '_contact_me'}>
              _contact_me
            </Item>
          </Grid> */}
        </div>
        
        <Grid item xs={2} width='100%'>
          <Item></Item>
        </Grid>
        <Grid item xs={2} style={{minWidth: '100px'}}>
          <Item><Switch /></Item>
        </Grid>
      </Grid>
    </StyleHeader>
  );
}


