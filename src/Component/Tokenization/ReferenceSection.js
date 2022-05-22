import { useState, useEffect } from 'react';
import Menu from './Menu';
// import Box from '@mui/material/Box';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import BibleCommentary from './reference-resources/BibleCommentary';
import OtherBible from './reference-resources/OtherBible';
import TranslationNotes from './reference-resources/TranslationNotes';
import TranslationWords from './reference-resources/TranslationWords';

const ReferenceSection = (props) => {

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


  const bookid = props.bookid;
  const chapter = props.chapter;
  const verse = props.verse;
  //const BookCode=BIBLES_ABBRV_INDEX[bookName];
  const bookname=props.bookname;

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
          },
          {
            label: 'Bible Commentary',
            onClick: commentaryClick,
            status: commentaryStatus,
          },
          {
            label: 'Translation Word',
            onClick: translationWordClick,
            status: translationWordStatus,
          },
      {
        label: 'Translation Notes',
        onClick: translationNoteClick,
        status: translationNotesStatus,
      },
      
    ];
    
    const classes = useStyles();

    const [comverion, setComVer] = useState('');
    const [biblever, setBibleVersion] = useState('');


    const handleChangeCommVer = (event) => {
      setComVer(event.target.value);
    };
    const handleChangeBibleVer = (event) => {
      setBibleVersion(event.target.value);
    };

    return (  
        <>
 <div className='View-menu' style={{display:'flex'}}>  
<div style={{width:'auto', border:'2px solid #5352ed', background:'#f1f2f6'}}>
    <Menu buttonLabel='View Resources'  menuItems={menuItems} />
    </div>
</div>
<div className="flex-container" style={{display:'flex',flexWrap: 'wrap',marginBottom:'10px'}}>

  {signVideoStatus && (
    <Box border={1} p={2} m={.5} style={{Width:'30%',height:'250px',maxWidth:'395px'}}>
       Sign Video 
       <iframe height="97%" width='100%' src="https://www.youtube.com/embed/ABPVVw_aw44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Box>
  )}
  {/* other bible section */}
   {otherBibleStatus && (
    <Box border={1} p={2} m={.5} style={{width:'30%',height:'250px',maxWidth:'395px',background:'#2C3A47',color:'#F8EFBA'}}>

    <div style={{display:'flex',justifyContent:'space-between'}}>
    <div style={{width:'250px'}}> 
    <p>Other Bible</p>
    </div>


    <div style={{background:'#f5f6fa',width:'auto',height:'auto'}}>
          <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select Bible</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={biblever}
          onChange={handleChangeBibleVer}
        >
          <MenuItem value='en_KJV_1_bible' >Eng KJV</MenuItem>
          <MenuItem value='en_ESV_1_bible'>Eng ESV</MenuItem>
          {/* <MenuItem value='en_ASV_1_bible'>Eng ASV</MenuItem> */}
          <MenuItem value='ml_IRV_5_bible'>Malayalam IRV</MenuItem>
          <MenuItem value='hi_IRV_5_bible'>Hindi IRV</MenuItem>

        </Select>
      </FormControl>
      </div>
        </div>

      <OtherBible bookid={bookid} chapter={chapter} verse={verse} version={biblever} bookname={bookname}/>
    
    
 </Box>
)}
{/* Other Bible section ends here */}
  {/* Commentary section */}
  {commentaryStatus && (
    <Box border={1} p={2} m={.5} style={{width:'30%',height:'250px',maxWidth:'395px',background:'#2C3A47',color:'#F8EFBA'}}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <div style={{width:'250px'  ,justifyContent:'center'}}>
          <p>Commentary</p>
          </div>
          <div style={{background:'#f5f6fa',width:'auto',height:'auto'}}>
          <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select version</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={comverion}
          onChange={handleChangeCommVer}
        >
          <MenuItem value='en_BBC_1_commentary' >Eng BBC</MenuItem>
          <MenuItem value='en_MHCC_1_commentary'>Eng MHCC</MenuItem>
          {/* <MenuItem value='hi_HINDIIRVN_1_commentary'>Hindi IRV</MenuItem> */}
          <MenuItem value='mr_BBC_1_commentary'>Marathi BBC</MenuItem>
          <MenuItem value='gu_BBC_1_commentary'>Gujarati BBC</MenuItem>

        </Select>
      </FormControl></div>
        </div>
        
        
        <BibleCommentary  bookid={bookid} chapter={chapter} verse={verse} comver={comverion}/>
    </Box>
  )}
  {/* Commentary section ends here */}
  {/* Translation word section */}
  {translationWordStatus && (
    // <Box border={1} p={2} m={.5} style={{width:'50%',minHeight:'250px',maxWidth:'395px'}}>
    <Box border={1} p={2} m={.5} style={{width:'45.5%',height:'250px',background:'#2C3A47',color:'#F8EFBA'}}>
       Translation Word 
       <TranslationWords bookId={bookid} chapter={chapter} verse={verse} />
    </Box>
  )}
  {/* Translation word section ends here */}
  {/* Translation Notes section */}
   {translationNotesStatus && (
    // <Box border={1} p={2} m={.5} style={{width:'50%',height:'415px',maxWidth:'395px',background:'#2C3A47',color:'#F8EFBA'}}>
    <Box border={1} p={2} m={.5} style={{width:'45.5%',height:'250px',background:'#2C3A47',color:'#F8EFBA'}}>
       Translation Notes 
   <TranslationNotes bookId={bookid} chapter={chapter} verse={verse}/>
    </Box>
  )}
  {/* Translatoin notes section ends here */}


  </div>
        </>


    );
}
 
export default ReferenceSection;