import * as React from 'react';
//import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
//import Divider from '@mui/material/Divider';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Pagination from './Pagination';
//import Chip from '@mui/material/Chip';
 import ReferenceSection from './ReferenceSection';
 import RCL from "./RCL"
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
    const classes = useStyles();

    return (
      <List className={classes.root}>
        
        <div  className="bible-pagination" style={{display:'flex'}}>
            <Pagination />
        </div>
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
        <div className="Resources-div" sisplay='flex' style={{minHeight:'300px',justifyContent:'flex-start'}} >
       
        <ReferenceSection />
        </div>
        {/* <Divider component="li"  />
        <li>
          <Typography
            className={classes.dividerFullWidth}
            color="textSecondary"
            display="block"
            variant="caption"
          >
            <b>Sign Pane</b>
          </Typography>
        </li> */}
       
        {/* <div className="sign-div" style={{height:'200px'}}>
        
        </div> */}
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
        <RCL />
        </div>
       
      </List>
    );
  }
 
export default TokenizationPage;