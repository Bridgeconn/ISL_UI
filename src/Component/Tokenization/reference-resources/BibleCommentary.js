import { useEffect,useState } from "react";
import axios from "axios";
import Parser from 'html-react-parser';

const BibleCommentary = (props) => {
    const bookid = props.bookid;
  const chapter = parseInt(props.chapter);
  const verse = parseInt(props.verse);
  const comver=props.comver;
//   console.log(`${comver}`);
  const [comment,setComment]=useState('');
//console.log(`${bookid} ${chapter} ${verse}`);
useEffect(()=>{
  if(comver)
  (axios.get(`https://api.vachanengine.org/v2/commentaries/${comver}?book_code=${bookid}&chapter=${chapter}&verse=${verse}`,{
  }).then((item)=>{

   // console.log(item['data'][0].commentary);
    setComment(item['data'][0].commentary);

    
  }).catch((error)=>{
    console.log(error);
  }))
},[comver,bookid,chapter,verse])
    return ( 

         <div style={{overflowY:'scroll',maxHeight:'70%',marginTop:'2.5px',background:'#f7f1e3',color:'#40407a'}}>
    {Parser(comment)}
    
    </div>
  
        
        
     );
}
 
export default BibleCommentary;