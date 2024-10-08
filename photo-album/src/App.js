import logo from './logo.svg';
import Navbar from "./Components/CommonComponents/Navbar";
import {useState} from "react";
// import LoginSignup from "./Components/Pages/LoginSignup";

function App() {

    const [theme, setTheme] = useState("light");

  return (
    <div>
      {/*<LoginSignup/>*/}
      <Navbar/>
    </div>
  );
}

export default App;
