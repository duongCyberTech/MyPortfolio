import {useState, useEffect} from 'react';
import {styled} from '@mui/material/styles'
import {TerminalTwoTone, DataObjectTwoTone, IntegrationInstructionsTwoTone, IntegrationInstructionsSharp} from '@mui/icons-material'
import LabelSlot from '../components/FolderList.jsx';
import { Education, Certifications } from '../components/InfoByTag.jsx';
import { Pdata } from "../data/data";
import  CommentSnippet  from '../components/commentSnippet.jsx';

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
  alignItems: "center", 
  justifyItems: 'center', 
  paddingTop: '20px'
}));

const StyleAboutMe = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    fontWeight: '900',
    scrollbarWidth: 'none',
    '&::WebkitScrollbar': {
        display: 'none',
    },  
}))

const AboutMe = () =>{
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900);
    const [renderData, setRenderData] = useState(null);
    const [fileId, setFileId] = useState(null);

    useEffect(() => {
      const handleResize = () => setIsDesktop(window.innerWidth > 900);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [window.innerWidth]);  

    useEffect(() => {
        setRenderData(Pdata.find((item) => item.id === fileId));
    }, [fileId]);

    return (
        <StyleAboutMe
            style={{
                display: 'flex',
                height: 'auto',            // chiếm toàn bộ chiều cao màn hình
                width: '100vw',             // chiếm toàn bộ chiều
                minHeight: 'calc(100vh - 112px)', // trừ chiều cao của AppBar
            }}
        >
            <div style={{height: 'auto', borderRight: '1px solid #90A1B9', alignItems: "center", justifyItems: 'center'}}>
                <Item>
                    <TerminalTwoTone sx={{ fontSize: 32 }} />
                    <DataObjectTwoTone sx={{fontSize: 32}} />
                    <IntegrationInstructionsTwoTone sx={{fontSize: 32}} />
                </Item>
            </div>
            <div style={{height: 'auto', borderRight: '1px solid #90A1B9', alignItems: "center", justifyItems: 'center'}}>
                <LabelSlot fileId={fileId} setFileId={setFileId} />
            </div>
            <div style={{ 
                height: 'auto', alignItems: 'center', 
                justifyItems: 'center', fontFamily: 'Intel One Mono', 
                fontWeight: '800', color: '#90A1B9', padding: "10px",
                maxHeight: '100vh', overflowY: 'auto', width: '100%' 
            }}>
                {['hsc', 'uni'].includes(fileId) && (
                    <Education data={renderData} />
                )}
                {['cert-1', 'cert-2'].includes(fileId) && (
                    <Certifications data={renderData} />
                )}
                {!['hsc', 'uni', 'cert-1', 'cert-2'].includes(fileId) && (
                    <CommentSnippet />
                )}
            </div>
        </StyleAboutMe>
    )
}

export default AboutMe;