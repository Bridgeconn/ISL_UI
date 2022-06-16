import * as React from 'react';
//import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
//import Divider from '@mui/material/Divider';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
// import Pagination from './Pagination';
//import Chip from '@mui/material/Chip';
 import ReferenceSection from './ReferenceSection';
//  import RCL from "./RCL";
import AlignmentEditor from '../Alignment-Editor/AlignmentEditor';
import LoadingPage from '../LoadingAnimation/LoadingPage';
// import Tokenization from '../Tokenization';
// import SourceText from '../SourceText';
// import Pagination from '../Pagination';
//import RefSec from '../RefSec';
//import DictionaryManagement from './DictionaryManagement';

// const TokenizationPage = () => {

//     const Root = styled('div')(({ theme }) => ({
//         width: '100%',
//         ...theme.typography.body2,
//         '& > :not(style) + :not(style)': {
//           marginTop: theme.spacing(2),
//         },
//       }));

//     return ( 
//       <>
//       <div className="pagination" style={{marginTop:'50px'}}>
//             <Pagination />
//        </div>
      
// <Root>
//      {/* <Pagination /> */}
//       <Divider textAlign='left'>Reference</Divider>
//       <div className="reference-section"  style={{minHeight:'300px'}}>
//       <ReferenceSection />
//       {/* <RefSec /> */}
//       </div>
      
//       <Divider textAlign="left">Sign Token</Divider>
//         <div className="token-section" style={{minHeight:'150px'}}>
//         <Tokenization />  
//         </div>
    
//       <Divider textAlign="left">Source Text</Divider>
//         <div className="source-section" style={{minHeight:'150px'}}>
//       <SourceText />
//       </div>
//       </Root>

//       </>
//      );
    
// }

import  {useState, useEffect} from 'react';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
//import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import TextField from "@material-ui/core/TextField";
import useBibleReference from '../Tokenization/BCVDropdownComponents/useBibleReference';
import BibleReference from '../Tokenization/BCVDropdownComponents/BibleReference';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  dividerFullWidth: {
    margin: `10px 0 0 ${theme.spacing(2)}px`,
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`,
  },
}));

const TokenizationPage = () => {
  const [isLoading,setIsLoading] = useState(true)
    const classes = useStyles();
    //BCV dropdown related code
    // const supportedBooks = null; // if empty array or null then all books available
    const supportedBooks = [ 'tit']; // if non-empty array then only these books are shown
    const initialBook = "";
    const initialChapter = "";
    const initialVerse = "";
    // select colors
     //const grey = ""; // a shade of grey
    //const blue = "#576574"; // a shade of blue
     const white = "#FFFFFF";
     const black = "#000000";
    // const style = {}; // use defaults
    const style = { color: black, background: white }; // set forground and background colors
   
    function onChange(bookId, chapter, verse) {
        console.log(`\n### Reference changed to ${bookId} - ${chapter}:${verse}\n\n`);
      }
    
      
      const initial =
        {
          initialBook,
          initialChapter,
          initialVerse,
          onChange
        };
      
      const {state, actions} = useBibleReference(initial);
      
      useEffect(() => {
        actions.applyBooksFilter(supportedBooks);
      }, []); // just apply the first time in this demo
//ends here

    return (
      <>
      <List className={classes.root}>
      {
        isLoading?
        <LoadingPage />
        :
        null
      }
        {/* <div  className="bible-pagination" style={{display:'flex'}}>
            <Pagination />
        </div> */}

        {/* including  pagination code inside the tokenization page.
        begins-
        */}

      <div style={{}}>
  <div style={{display: 'flex', alignItems: 'center', marginTop:'-20px',height:'70px',width:'100%',justifyContent: 'left',backgroundImage:''}}>
    <BibleReference
      status={state}
      actions={actions}
      style={style}
    />
  </div>


        {/* ends */}
        <Divider component="li" />
        <li>
          <Typography
            className={classes.dividerFullWidth}
            color="textSecondary"
            display="block"
            variant="caption"
          >
            <b>Resources</b>
          </Typography>
        </li>
        {/* <div className="Resources-div" style={{ overflowY: 'auto', height: '400px'}} contain='none'> */}
        <div className="Resources-div" display='flex' style={{minHeight:'10px',justifyContent:'flex-start'}} 
        >
        <ReferenceSection bookid={state.bookId} chapter={state.chapter} verse={state.verse} bookname={state.bookName}/>
        </div>
        <Divider component="li"  />
        <li>
          <Typography
            className={classes.dividerFullWidth}
            color="textSecondary"
            display="block"
            variant="caption"
          >
            <b>Alignment Editor</b>
          </Typography>
        </li> 
       
         <div className="sign-div" style={{minHeight:'200px',marginTop:'20px'}}>
           <AlignmentEditor  bookid={state.bookId} chapter={state.chapter} verse={state.verse} setloading={setIsLoading}/>
         {/* <RCL bookid={state.bookId} chapter={state.chapter} verse={state.verse}/> */}
        
        </div>
        {/* <Divider component="li" />
        <li>
          <Typography
            className={classes.dividerFullWidth}
            color="textSecondary"
            display="block"
            variant="caption"
          >
            <b>Source Pane</b>
          </Typography>
        </li> */}
       <Divider component="li" />
        <div className="source-div" style={{height:'150px'}}>
        </div>
        </div>
      </List>
      </>
    );
  }
 
export default TokenizationPage;