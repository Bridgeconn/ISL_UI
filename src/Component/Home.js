import BibleImage from "../Assets/deaf-bible-american-sign-language-deaf-culture.png"
import LineTo from "react-lineto";

const Home = () => {
  return (
    <div>
      <img className="A" src={BibleImage} alt="Sign Bible Image" width="400" align="left" style={{marginLeft: "30px",zIndex: "9999"}}/>
      {/* <img className="B" src={BibleImage} alt="Sign Bible Image" width="400" align="left" style={{marginLeft: "100px",marginTop: "200px",zIndex: "9999"}}/>
      <LineTo from="A" to="B" borderColor="#000" borderWidth={5} zIndex={10}/> */}
    </div>
  );
};

export default Home;