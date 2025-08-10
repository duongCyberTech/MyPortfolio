import React, {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import {Grid, Link} from '@mui/material';
import Switch from './SwitchTemplate.jsx';
import '@fontsource/montserrat'; // mặc định 400
import {Facebook, GitHub, LinkedIn} from '@mui/icons-material'

const Item = styled('div')(({ theme, isActive }) => ({
  backgroundColor: '#314158',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: isActive ? '#ffffff' : '#90A1B9',
  fontFamily: 'Intel One Mono',
  fontWeight: '800',
  cursor: 'pointer',
  border: '1px solid #ffffff',

  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
  justifyContent: 'center',
  height: '100%',
  boxSizing: 'border-box',
  transition: 'all 0.1s ease',
}));

const StyleFooter = styled('footer')(({ theme }) => ({
  backgroundColor: '#314158',
  zIndex: theme.zIndex.appBar,
  boxShadow: theme.shadows[4],
  padding: theme.spacing(0, 0),
}));



export default function Footer() {
  return (
    <StyleFooter width='100%'
      style={{
        width: '100vw',
        bottom: 0,
        left: 0,
      }}
    >
      <Grid container spacing={0} width='100%' wrap="nowrap">
        <Grid item xs={4} width='20%' style={{minWidth:'200px'}}>
          <Item style={{ justifyContent: 'flex-start', paddingLeft:'20px' }}>
            find me in:
          </Item>
        </Grid>
        <div style={{display: 'flex', alignItems: 'center', justifyItems: 'center'}}>
          <Grid item xs={2} width='10%' style={{minWidth: "50px"}}>
            <Item>
                <Link href='https://www.facebook.com/duong.mai.744435' target='_blank'><Facebook /></Link>
            </Item>
          </Grid>
          <Grid item xs={2} width='10%' style={{minWidth: "50px"}}>
            <Item>
                <Link href='https://www.linkedin.com/in/duong-mai-78313b376/' target='_blank'><LinkedIn /></Link>
            </Item>
          </Grid>
        </div>
        
        <Grid item xs={2} width='100%'>
          <Item></Item>
        </Grid>
        <Grid item xs={2} style={{minWidth: '200px'}}>
          <Item><Link href='https://github.com/duongCyberTech' target='_blank' underline='none'>@dCyberTech  </Link><GitHub /></Item>
        </Grid>
      </Grid>
    </StyleFooter>
  );
}


