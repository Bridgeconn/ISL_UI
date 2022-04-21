<<<<<<< HEAD
=======
import react,{useEffect,useState} from "react"
import { AlignmentEditor,AlignmentProvider } from "alignment-editor-rcl";
import axios from "axios";
import {BIBLES_ABBRV_INDEX} from '../Tokenization/BCVDropdownComponents/BooksOfTheBible';

const RCL = (props) =>{
  const [token,setToken] = useState([])
  //related to BCV calues
  const bookName = props.bookid;
    const chapter = props.chapter.padStart(3, '0');
    const verse = props.verse.padStart(3, '0');;
    const BookCode=BIBLES_ABBRV_INDEX[bookName];
    const sentenceId=parseInt((BookCode+chapter+verse));
    console.log(sentenceId)
  
  useEffect(()=>{
    console.log(sentenceId);
    axios.get(`https://api.vachanengine.org/v2/autographa/project/tokens?project_id=100008&sentence_id_list=${sentenceId}&use_translation_memory=true&include_phrases=true&include_stopwords=false`,{
      headers:{
        "app": "Autographa",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    }).then((item)=>{

      console.log(item.data);

      setToken(item.data);
    }).catch((error)=>{
      console.log(error);
    })
  },[sentenceId])
    return(
      <div>
        <AlignmentProvider style={{height: "1500px"}}>
        <AlignmentEditor
  sourceSegments={
    token.map((item=>{
      return(
        { text: item.token}
      )
    }))}
  targetSegments={[
    { text: 'For', offset: "0-1" },
    { text: 'if' },
    { text: 'anyone' },
    { text: 'is' },
    { text: 'a' },
    { text: 'hearer' },
    { text: 'of' },
    { text: 'the' },
    { text: 'word' },
    { text: 'and' },
    { text: 'not' },
    { text: 'a' },
    { text: 'doer' },
    { text: 'he' },
    { text: 'is' },
    { text: 'like' },
    { text: 'a' },
    { text: 'man' },
    { text: 'who' },
    { text: 'looks' },
    { text: 'intently' },
    { text: 'at' },
    { text: 'his' },
    { text: 'natural' },
    { text: 'face' },
    { text: 'in' },
    { text: 'a' },
    { text: 'mirror' },
  ]}
  stateUpdatedHook={(a) => {
    console.log('STATE UPDATED', a);
  }}
/>
</AlignmentProvider>
</div>
    )
}

export default RCL
>>>>>>> 7717afe (added BCV dropdown component)
