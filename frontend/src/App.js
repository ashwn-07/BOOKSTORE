import {Route, Routes} from "react-router-dom"
import Home from "./Components/Home/Home";
import Login from "./Components/User/Login";
import Signup from "./Components/User/Signup";
import Bookdetail from "./Components/Home/Books/Bookdetail";
import Landingpage from "./Components/User/UserDash/Landingpage";
function App() {
  return (
    <div>
     <Routes>
      <Route path= "/" element={<Home/>}/>
      <Route path= "/login" element={<Login/>}/>
      <Route path= "/signup" element={<Signup/>}/>
      <Route path= "/bookdetails" element={<Bookdetail/>}/>
      <Route path= "/userdashboard" element={<Landingpage/>}/>
     </Routes>
    </div>
  );
}

export default App;
