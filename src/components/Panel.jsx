import { AspectRatio } from '@mui/icons-material';
import React from 'react';
import ava from '../asset/assci.png'
import hcmut from '../asset/hcmut.PNG'


const GameOverPanel = () => {
  return (
    <div style={styles.container}>
      <div style={styles.deviceBox}>
        {/* Màn hình game */}
        <div style={styles.screen}>
          <img height='100%' src= {ava} style={{borderRadius: '8px'}}/>
        </div>

        {/* Bảng điều khiển */}
        <div style={styles.controller}>
          <img src={hcmut} height='50px' width='50px' />
          <div style={styles.controllerText}>
            // Studying Computer Science Bachelor <br /> <br />// At Vietnam National University Ho Chi Minh City - University of Technology
          </div>
          <div style={styles.foodLabel}></div>
          <div style={styles.foodRow}>
            {Array(10).fill().map((_, i) => (
              <div key={i} style={styles.foodDot} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '50vh',
    AspectRatio: '1/1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"Intel One Mono", monospace',
  },
  deviceBox: {
    background: 'linear-gradient(135deg, #175553, #3b548f)',
    padding: 24,
    borderRadius: 8,
    position: 'relative',
    boxShadow: '0 0 20px rgba(0,255,255,0.2)',
    display: 'flex',
    gap: 24,
  },
  screen: {
    backgroundColor: '#121c2e',
    borderRadius: 8,
    width: 200,
    height: 300,
    padding: 0,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#00ffe0',
    borderRadius: '50%',
    marginBottom: 'auto',
    marginTop: 10,
  },
  snake: {
    color: '#43D9AD',
    fontSize: 40,
    fontWeight: 'bold',
    transform: 'translateY(-10px)',
  },
  gameOverBox: {
    background: 'linear-gradient(90deg, #012726, #043534)',
    padding: '8px 16px',
    borderRadius: 4,
    marginTop: 16,
  },
  gradientText: {
    background: 'linear-gradient(to right, #00ffe0, #00ffa8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
    fontSize: 18,
  },
  restart: {
    background: 'none',
    border: 'none',
    color: '#ccc',
    marginTop: 12,
    fontSize: 14,
    cursor: 'pointer',
  },
  controller: {
    backgroundColor: '#121c2e',
    padding: 16,
    borderRadius: 8,
    width: 250,
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    gap: 10,
  },
  controllerText: {
    width:'100%',
    color: '#ddd',
    fontSize: 12,
    lineHeight: 1.5,
    fontFamily: 'monospace',
    textAlign: 'justify',
  },
  arrows: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
  },
  arrowRow: {
    display: 'flex',
    gap: 5,
  },
  foodLabel: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 8,
  },
  foodRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 4,
  },
  foodDot: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: '#00ffe0',
    boxShadow: '0 0 6px #00ffe0',
  },
  skip: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    background: 'none',
    color: '#ffffff',
    border: '1px solid #fff',
    padding: '4px 10px',
    borderRadius: 6,
    fontSize: 12,
    cursor: 'pointer',
  },
};

export default GameOverPanel;
