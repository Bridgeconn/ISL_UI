import * as React from 'react';
//import {useState} from 'react';
//import InputLabel from '@mui/material/InputLabel';
//import MenuItem from '@mui/material/MenuItem';
//import FormControl from '@mui/material/FormControl';
//import Button from '@mui/material/Button';
//import Select from '@mui/material/Select';
//import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from '@material-ui/core/styles';
//import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Pagination = () => {
        
  
const [chapter,setChapter] = React.useState('');    
const [book,setBook] = React.useState('');   
const [verse,setVerse] = React.useState(''); 

const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
      
      const classes = useStyles();

    return ( 
        
       
        <div className="pagination-container" style={{alignItems:'left'}}>
                

<Button variant="filled" startIcon={<ArrowBackIosIcon />} style={{marginTop:'25px'}}/>
        
<FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Book</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={book}
          onChange={(e)=>setBook(e.target.value)}
        >
          <MenuItem value={'Genesis'}>Genesis</MenuItem>
          <MenuItem value={'Exodus'}>Exodus</MenuItem>
          <MenuItem value={'Ruth'}>Ruth</MenuItem>
          <MenuItem value={'Matthew'}>Matthew</MenuItem>
          <MenuItem value={'John'}>John</MenuItem>
          <MenuItem value={'Acts'}>Acts</MenuItem>

        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Chapter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={chapter}
          onChange={(e)=>setChapter(e.target.value)}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>

        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Verse</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={verse}
          onChange={(e)=>setVerse(e.target.value)}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
        </Select>
      </FormControl>

<Button variant="filled" startIcon={<ArrowForwardIosIcon font='large'/>} style={{marginTop:'25px'}}/>


        </div>


     );
}
 
export default Pagination;