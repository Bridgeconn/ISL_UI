// import react,{useEffect,useState} from "react"
// import { AlignmentEditor,AlignmentProvider } from "alignment-editor-rcl";
// import axios from "axios";
// // const RCL = () =>{
// //   const [token,setToken] = useState([])
// //   useEffect(()=>{
// //     axios.get("https://api.vachanengine.org/v2/autographa/project/tokens?project_id=100008&sentence_id_list=57001001&use_translation_memory=true&include_phrases=true&include_stopwords=false",{
// //       headers:{
// //         "app": "Autographa",
// //         "Authorization": `Bearer ${localStorage.getItem('token')}`
// //       }
// //     }).then((item)=>{
// //       setToken(item.data);
// //     }).catch((error)=>{
// //     })
// //   },[])
// // import { AlignmentEditor,AlignmentProvider } from "alignment-editor-rcl";

// const RCL = () =>{
//     return(
//       <div>
//         <AlignmentProvider style={{height: "1500px"}}>
//         <AlignmentEditor
// <<<<<<< HEAD
//   sourceSegments={
//     token.map((item=>{
//       return(
//         { text: item.token}
//       )
//     }))}
//   targetSegments={[
//     { text: 'For', offset: "0-1" },
// =======
//   sourceGlosses={[
//     { position: 2, glossText: 'anyone' },
//     { position: 3, glossText: 'hearer' },
//     { position: 4, glossText: 'word' },
//     { position: 12, glossText: 'doer' },
//     { position: 17, glossText: 'man' },
//     { position: 23, glossText: 'natural' },
//   ]}
//   sourceSegments={[
//     { text: 'ὅτι' },
//     { text: 'εἴ' },
//     { text: 'τις' },
//     { text: 'ἀκροατὴς' },
//     { text: 'λόγου', partOfSpeech: 'noun' },
//     { text: 'ἐστὶν', partOfSpeech: 'verb' },
//     { text: 'καὶ' },
//     { text: 'οὐ' },
//     { text: 'ποιητής' },
//     { text: 'οὗτος' },
//     { text: 'ἔοικεν' },
//     { text: 'ἀνδρὶ' },
//     { text: 'κατανοοῦντι' },
//     { text: 'τὸ' },
//     { text: 'πρόσωπον' },
//     { text: 'τῆς' },
//     { text: 'γενέσεως', partOfSpeech: 'adjective' },
//     { text: 'αὐτοῦ' },
//     { text: 'ἐν' },
//     { text: 'ἐσόπτρῳ' },
//   ]}
//   referenceSegments={[
//     { text: 'Porque' },
//     { text: 'si' },
//     { text: 'alguien' },
//     { text: 'es' },
//     { text: 'oidor' },
//     { text: 'de' },
//     { text: 'la' },
//     { text: 'palabra' },
//     { text: 'y' },
//     { text: 'no' },
//     { text: 'hacedor' },
//     { text: 'es' },
//     { text: 'como' },
//     { text: 'un' },
//     { text: 'hombre' },
//     { text: 'que' },
//     { text: 'mira' },
//     { text: 'fijamenta' },
//     { text: 'su' },
//     { text: 'rostro' },
//     { text: 'natural' },
//     { text: 'en' },
//     { text: 'un' },
//     { text: 'espejo' },
//   ]}
//   targetSegments={[
//     { text: 'For' },
// >>>>>>> a3fbc70 (rcl added)
//     { text: 'if' },
//     { text: 'anyone' },
//     { text: 'is' },
//     { text: 'a' },
//     { text: 'hearer' },
//     { text: 'of' },
//     { text: 'the' },
//     { text: 'word' },
//     { text: 'and' },
//     { text: 'not' },
//     { text: 'a' },
//     { text: 'doer' },
//     { text: 'he' },
//     { text: 'is' },
//     { text: 'like' },
//     { text: 'a' },
//     { text: 'man' },
//     { text: 'who' },
//     { text: 'looks' },
//     { text: 'intently' },
//     { text: 'at' },
//     { text: 'his' },
//     { text: 'natural' },
//     { text: 'face' },
//     { text: 'in' },
//     { text: 'a' },
//     { text: 'mirror' },
//   ]}
// <<<<<<< HEAD
//   stateUpdatedHook={(a) => {
// =======
//   userLinks={[
//     { sources: [2], targets: [2], type: 'manual' },
//     { sources: [3], targets: [3], type: 'manual' },
//     { sources: [7], targets: [8], type: 'manual' },
//     { sources: [23], targets: [27], type: 'manual' },
//   ]}
//   referenceLinks={[
//     { sources: [0], targets: [0], type: 'manual' },
//     { sources: [3], targets: [4], type: 'manual' },
//     { sources: [4], targets: [7], type: 'manual' },
//     { sources: [5], targets: [3], type: 'manual' },
//     { sources: [16], targets: [20], type: 'manual' },
//     { sources: [19], targets: [23], type: 'manual' },
//   ]}
//   stateUpdatedHook={(a) => {
//     console.log('STATE UPDATED', a);
// >>>>>>> a3fbc70 (rcl added)
//   }}
// />
// </AlignmentProvider>
// </div>
//     )
// }

// export default RCL