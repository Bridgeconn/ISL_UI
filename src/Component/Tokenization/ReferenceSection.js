import { useState, useEffect } from 'react';
import Menu from './Menu';
// import Box from '@mui/material/Box';
import Box from '@material-ui/core/Box';

const ReferenceSection = () => {

    const [signVideoStatus, setSignVideoStatus] = useState(true);
    const [otherBibleStatus, setOtherBibleStatus] = useState(false);
    const [translationWordStatus, setTranslationWordStatus] = useState(false);
    const [translationNotesStatus, setTranslationNotesStatus] = useState(false);
    const [commentaryStatus, setCommentaryStatus] = useState(false);
    
    const signVideoClick = () => {
        setSignVideoStatus(!signVideoStatus);
      };
      const otherBibleClick = () => {
        setOtherBibleStatus(!otherBibleStatus);
      };
      const translationWordClick = () => {
        setTranslationWordStatus(!translationWordStatus);
      };
          
    const translationNoteClick = () => {
      setTranslationNotesStatus(!translationNotesStatus);
    };
    
    const commentaryClick = () => {
      setCommentaryStatus(!commentaryStatus);
    };
    

    const menuItems = [
        {
            label: 'Sign Video',
            onClick: signVideoClick,
            status: signVideoStatus,
          },{
            label: 'Other Bible',
            onClick: otherBibleClick,
            status: otherBibleStatus,
          },{
            label: 'Translation Word',
            onClick: translationWordClick,
            status: translationWordStatus,
          },
      {
        label: 'Translation Notes',
        onClick: translationNoteClick,
        status: translationNotesStatus,
      },
      {
        label: 'Bible Commentary',
        onClick: commentaryClick,
        status: commentaryStatus,
      },
    ];
    


    return (  
        <>
 <div className='View-menu' style={{display:'flex'}}>  
    <Menu buttonLabel='View' menuItems={menuItems} />
</div>
<div className="flex-container" style={{display:'flex',flexWrap: 'wrap',marginBottom:'10px'}}>

  {signVideoStatus && (
    <Box border={1} p={2} m={.5} style={{Width:'30%',minHeight:'250px',maxWidth:'395px'}}>
       Sign Video Panel
       <iframe height="97%" width='100%' src="https://www.youtube.com/embed/ABPVVw_aw44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Box>
  )}
   {otherBibleStatus && (
    <Box border={1} p={2} m={.5} style={{width:'30%',minHeight:'250px',maxWidth:'395px'}}>
    Other Bible Panel
 </Box>
)}
   {translationWordStatus && (
    <Box border={1} p={2} m={.5} style={{width:'30%',minHeight:'250px',maxWidth:'395px'}}>
       Translation Word Panel
    </Box>
  )}
   {translationNotesStatus && (
    <Box border={1} p={2} m={.5} style={{width:'30%',minHeight:'250px',maxWidth:'395px'}}>
       Translation Notes Panel
    </Box>
  )}
  {commentaryStatus && (
    <Box border={1} p={2} m={.5} style={{width:'30%',height:'250px',maxWidth:'395px'}}>
        Commentary Panel
    </Box>
  )}
  </div>
        </>


    );
}
 
export default ReferenceSection;