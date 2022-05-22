import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home';
import SignUp from './Component/Login/SignUp';
import Login from './Component/Login/Login';
import './App.css';
import {useEffect, useState} from 'react';
import CreateProject from "./Component/Project/CreateProject";
import ViewProject from "./Component/Project/ViewProject";
import RCL from "./Component/Tokenization/RCL"
import AlignmentEditor from './Component/Alignment-Editor/AlignmentEditor';


import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import TokenizationPage from './Component/Tokenization/TokenizationPage';

function App() {
  const [login,setLogin] = useState()
  useEffect(()=>{
    setLogin(localStorage.getItem('login'))
  },[login])
  return (
    <div className="App">
      <Router>
    <Navbar login={login} setlogin={setLogin}/>
    <Switch>
    <div style={{margin: "80px 10px"}}>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/token">
        <TokenizationPage/>
      </Route>
      <Route exact path="/signup">
        <SignUp loginStatus={setLogin}/>
      </Route>
      <Route exact path="/login" loginStatus={setLogin}>
        <Login loginStatus={setLogin}/>
      </Route>
      <Route exact path="/create-project">
        <CreateProject />
      </Route>
      <Route exact path="/view-project">
        <ViewProject />
      </Route>
      <Route exact path="/rcl">
        <RCL />
      </Route>
      <Route exact path="/alignment-editor/:id">
        <AlignmentEditor setlogin={setLogin}/>
      </Route>
    </div>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
