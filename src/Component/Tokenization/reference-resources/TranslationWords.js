
import { useEffect } from "react";
import axios from "axios";
import tsvToJson from "../tsvToJson";
import { useState } from "react";
  import { TWL_FILENAMES } from "../BCVDropdownComponents/BooksOfTheBible";
const TranslationWords = (props) => {
  var showdown = require("showdown");
  var converter = new showdown.Converter();
  const parse = require("html-react-parser");
  const [data, setData] = useState([]);
  const [dat, setDat] = useState([]);
//  const bookId = props.bookId;

  const chapter = props.chapter;
  const verse = props.verse;
  const chapterverse=`${chapter}:${verse}`;
  //console.log(typeof(chapterverse));
     //const twlfilename = TWL_FILENAMES[bookId];
  axios.defaults.baseURL = "https://git.door43.org/unfoldingWord";
  useEffect(() => {
    // console.log("Hello",bookId,chapter,verse);

    // let dataList = [];
// if(bookId==='tit')    {
  const fetchData = () => {
      
  //    console.log(twlfilename);
       axios
     .get(`/en_twl/raw/branch/master/twl_TIT.tsv`)
        //.get(`/en_twl/raw/branch/master/${twlfilename}.tsv`)
        .then((res) => {
          const t = tsvToJson(res.data);
          setDat(t);         
        })
        .catch((err) => {
          console.log(err);
        });
     };    
    fetchData();
 //   setData(dataList);
//console.log(bookId);
    //}
}, []); 

useEffect(()=>{
  //if(bookId==='tit'){
  let dataList= [];
  
  dat?.map((c, i) => {
      return axios
        .get(
          `/en_tw/raw/branch/master` +
            c.TWLink.split("rc://*/tw/dict")[1] +
            `.md`
        )
        .then((res) => {
          dataList.push({
            Reference: c.Reference,
            ID: c.ID,
            Tags: c.Tags,
            OrigWords: c.OrigWords,
            Occurrence: c.Occurrence,
            data: res.data,
          });
        })
        .catch((err) => console.log(err));
    });
    setData(dataList);
    console.log("good",dataList);
//  }
  },[dat]);


  return (
  
    
      
    <div style={{height:'250px'}}>
        <div style={{overflowY:'scroll',height:'92%',marginTop:'10px',background:'#f7f1e3',color:'#40407a'}}>
       
  {data.filter(item => item.Reference ===chapterverse).map(filteredItem => (
    <div key={filteredItem.ID}>
      {parse(converter.makeHtml(filteredItem.data))}
    </div>
  ))}
</div>
</div>      
    
  );
};
export default TranslationWords;
