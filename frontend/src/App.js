import {Route, Routes} from "react-router-dom"
import Home from "./Components/Home/Home";
import Login from "./Components/User/Login";
import Signup from "./Components/User/Signup";
function App() {
  return (
    <div>
     <Routes>
      <Route path= "/" element={<Home/>}/>
      <Route path= "/login" element={<Login/>}/>
      <Route path= "/signup" element={<Signup/>}/>
     </Routes>
    </div>
  );
}

export default App;
