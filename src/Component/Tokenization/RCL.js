import react,{useEffect,useState} from "react"
import { AlignmentEditor,AlignmentProvider } from "alignment-editor-rcl";
import axios from "axios";
const RCL = () =>{
  const [token,setToken] = useState([])
  useEffect(()=>{
    axios.get("https://api.vachanengine.org/v2/autographa/project/tokens?project_id=100008&sentence_id_list=57001001&use_translation_memory=true&include_phrases=true&include_stopwords=false",{
      headers:{
        "app": "Autographa",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    }).then((item)=>{
      setToken(item.data);
    }).catch((error)=>{
      console.log(error);
    })
  },[])
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
    { text: 'For' },
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