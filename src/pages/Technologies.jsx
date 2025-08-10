import CardLayout from "../components/Animation";
import {styled} from '@mui/material/styles'
import {TerminalTwoTone, DataObjectTwoTone, IntegrationInstructionsTwoTone, IntegrationInstructionsSharp} from '@mui/icons-material'
import {useState, useEffect} from 'react';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: '#314158',
  padding: theme.spacing(1),
  textAlign: 'center',
  color:    '#90A1B9',
  fontFamily: 'Intel One Mono',
  fontWeight: '800',
  cursor: 'pointer',
  display: 'flex',
  gap: '20px',
  flexDirection: 'column',
  paddingTop: '20px'
}));

export default function Technologies() {
    const [ptype, setType] = useState('PL');
    return (
        <div style={{ 
                display: 'flex',
                height: 'auto',            // chiếm toàn bộ chiều cao màn hình
                width: '100vw',             // chiếm toàn bộ chiều
                minHeight: 'calc(100vh - 112px)', // trừ chiều cao của AppBar
            }}>
            <div style={{height: 'auto', borderRight: '1px solid #90A1B9', alignItems: "left", justifyItems: 'left'}}>
                <Item>
                    <div style={{
                        fontSize: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer',
                        backgroundColor: ptype === 'PL' ? '#bfc9d6ff' : 'transparent',
                        color: ptype === 'PL' ? '#f14f65ff' : '#90A1B9',
                        transition: 'background-color 0.3s, color 0.3s',
                        '&:hover': {
                            backgroundColor: '#bfc9d6ff',
                            color: '#e72e46ff',
                        }
                    }} onClick={() => setType('PL')}>
                        <TerminalTwoTone sx={{ fontSize: 32 }} />{' '}
                        Programming Languages
                    </div>
                    <div style={{
                        fontSize: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer',
                        backgroundColor: ptype === 'FR' ? '#bfc9d6ff' : 'transparent',
                        color: ptype === 'FR' ? '#f14f65ff' : '#90A1B9',
                        transition: 'background-color 0.3s, color 0.3s',
                        '&:hover': {
                            backgroundColor: '#bfc9d6ff',
                            color: '#FFA1AD',
                        }
                    }} onClick={() => setType('FR')}>
                        <DataObjectTwoTone sx={{fontSize: 32}} />{' '}
                        Frameworks
                    </div>
                    <div style={{
                        fontSize: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer',
                        backgroundColor: ptype === 'DB' ? '#bfc9d6ff' : 'transparent',
                        color: ptype === 'DB' ? '#f14f65ff' : '#90A1B9',
                        transition: 'background-color 0.3s, color 0.3s',
                        '&:hover': {
                            backgroundColor: '#bfc9d6ff',
                            color: '#FFA1AD',
                        }
                    }} onClick={() => setType('DB')}>
                        <IntegrationInstructionsTwoTone sx={{fontSize: 32}} />{' '}
                        DBMS
                    </div>
                    <div style={{
                        fontSize: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer',
                        backgroundColor: ptype === 'OT' ? '#bfc9d6ff' : 'transparent',
                        color: ptype === 'OT' ? '#f14f65ff' : '#90A1B9',
                        transition: 'background-color 0.3s, color 0.3s',
                        '&:hover': {
                            backgroundColor: '#bfc9d6ff',
                            color: '#FFA1AD',
                        }
                    }} onClick={() => setType('OT')}>
                        <IntegrationInstructionsSharp sx={{fontSize: 32}} />
                        Other Technologies
                    </div>
                </Item>
            </div>    
            <div style={{
                display: 'flex',
                flexGrow: 1,
                padding: '20px',
                overflowY: 'auto',
                padding: "20px 40px",
                alignItems: 'center',
                justifyContent: 'center',
                justifyItems: 'center'
            }}>
                <CardLayout ptype={ptype} />
            </div>        
        </div>
    );
}