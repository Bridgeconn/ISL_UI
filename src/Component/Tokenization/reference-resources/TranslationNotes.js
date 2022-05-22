import { useEffect } from "react";
import axios from "axios";
import tsvToJson from "../tsvToJson";
import { useState } from "react";
import { TN_FILENAMES } from "../BCVDropdownComponents/BooksOfTheBible";

const TranslationNotes = (props) => {
  //     const bookid = props.bookid;
  //     const bookcode=BIBLES_ABBRV_INDEX[bookid];
  //     // const UbookId= bookid.toUpperCase();
  //     // console.log(UbookId);

  //     // const bookcode = props.bookcode;

  // //     const bookname = props.bookname;

  // //   const chapter = parseInt(props.chapter);
  // //   const verse = parseInt(props.verse);
  // //   const version = props.version;

  // //  // const comver=props.comver;
  // //   console.log(`${bookid}`);
  //   const [question,setQuestion]=useState('');
  // //console.log(`${bookid} ${chapter} ${verse}`);
  // useEffect(()=>{axios.get(`https://git.door43.org/Door43-catalog/en_tn/raw/branch/master/en_tn_57-TIT.tsv?chapter=1&verse=1`,{
  //   }).then((item)=>{
  //     //console.log(`https://git.door43.org/Door43-catalog/en_tn/raw/branch/master/en_tn_${bookcode}-${bookid}.tsv`);
  //     console.log(item.data);
  //     setQuestion(item['data']);

  //   }).catch((error)=>{
  //     console.log(error);
  //   })
  // },[])
  var showdown = require("showdown");
  var converter = new showdown.Converter();
  const parse = require("html-react-parser");
  const bookId = props.bookId;
  const chapter = props.chapter;
  const verse = props.verse;
  const [notes, setNotes] = useState([]);
  const [verseNotes, setVerseNotes] = useState([]);

  const tnfilename = TN_FILENAMES[bookId];
  //  console.log(bookId);
  //console.log(chapter);

  //   console.log(tnfilename);

  axios.defaults.baseURL = "https://git.door43.org/unfoldingWord";

  useEffect(() => {
    console.log(bookId);
    console.log(tnfilename);

    const fetchData = () => {
      //console.log(tnfilename);

      axios
        // .get('/en_tn/raw/branch/master/en_tn_57-TIT.tsv')
        .get(`/en_tn/raw/branch/master/en${tnfilename}.tsv`)
        .then((res) => {
          //console.log(res);
          // console.log(bookId);
          //console.log(tnfilename);
          const t = tsvToJson(res.data);
          setNotes(t);
          //console.log(notes);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [tnfilename]);

  useEffect(() => {
    let arr = notes;
    //let arr=[{id:1,title:'A', status:true}, {id:3,title:'B',status:true}, {id:2, title:'xys', status:true}];
    //find where title=B
    let x = arr.filter((a) => {
      if (a.Chapter === chapter && a.Verse === verse) {
        return a;
      }
    });

    //console.log(x);
    setVerseNotes(x);
  }, [chapter, verse, notes]);

  return (
    <div style={{ height: "250px" }}>
      <div
        style={{
          overflowY: "scroll",
          height:'92%',marginTop:'10px',
          background: "#f7f1e3",
          color: "#40407a",
        }}
      >
        {/* {obverse && (<div><p>[ {bookname} - chapter {chapter} : verse {verse} ]  </p> <p>{obverse}</p></div>) }  */}
        {/* {Parser(question)}  */}
        {/* <ReactMarkdown children={question}/> */}
        {verseNotes.map((note) => (
          <div
            className="note-preview"
            key={note.ID}
            style={{
              width: "95%",
              height: "98%",
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <br />
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div>
                <strong>Book</strong> {note.Book}
              </div>
              <div>
                <strong>Chapter</strong> {note.Chapter}{" "}
              </div>
              <div>
                <strong>Verse</strong> {note.Verse}
              </div>
            </div>
            <br />

            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div style={{ marginRight: "10px" }}>
                <strong>GLQuote</strong> {note.GLQuote}
              </div>
              <div style={{ marginRight: "10px" }}>
                <strong>ID</strong> {note.ID}
              </div>
              <div style={{ marginRight: "10px" }}>
                <strong>OrigQuote</strong> {note.OrigQuote}
              </div>
              <div style={{ marginRight: "10px" }}>
                <strong>SupportReference</strong> {note.SupportReference}
              </div>
              <div>
                <strong>Occurrence</strong> {note.Occurrence}
              </div>
            </div>
            <br />
            <div>
              <strong>OccurrenceNote</strong>{" "}
              {parse(converter.makeHtml(note.OccurrenceNote))}
            </div>
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TranslationNotes;
