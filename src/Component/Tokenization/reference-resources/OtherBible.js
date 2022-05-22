import { useEffect,useState } from "react";
import axios from "axios";
// import Parser from 'html-react-parser';

const OtherBible = (props) => {
    const bookid = props.bookid;
    const bookname = props.bookname;

  const chapter = parseInt(props.chapter);
  const verse = parseInt(props.verse);
  const version = props.version;

//  console.log(chapter);
//  console.log(verse);
//  console.log(version);
//   console.log(`${bookid}`);
  const [obverse,setOBVerse]=useState('');
;
useEffect(()=>{
  if(version)
  (axios.get(`https://api.vachanengine.org/v2/bibles/${version}/verses?book_code=${bookid}&chapter=${chapter}&verse=${verse}&active=true&skip=0&limit=100`,{
  }).then((item)=>{

    //console.log(item['data'][0].verseText);
    setOBVerse(item['data'][0].verseText);

    
  }).catch((error)=>{
    console.log(error);
  }))
},[version,bookid,chapter,verse])
    return ( 

        <div style={{height:'180px',marginTop:'2.5px',background:'#f7f1e3',color:'#40407a'}}>
            
    {obverse && (<div><p><br/>[ {bookname} - chapter {chapter} : verse {verse} ]  </p> <p>{obverse}</p><br/></div>) } 
    
    </div>
        
        
     );
}
 
export default OtherBible;