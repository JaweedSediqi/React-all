import { Route, Routes } from "react-router-dom";
import Dashword from "./Component/Dashword";
import Navbar from "./Component/Navbar";
import Post from "./Component/Post";
import Catagory from "./Component/Catagory";
import Users from "./Component/Users";
import Logout from "./Component/Logout";
import Profile from "./Component/Profile";
import Settings from "./Component/Setting";
import Footer from "./Component/footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/Posts' Component={Post} />
        <Route path='/Catagory' Component={Catagory} />
        <Route path='/Users' exact Component={Users} />
        <Route path='/Logout' exact Component={Logout} />
        <Route path='/profile' exact Component={Profile} />
        <Route path='/settings' exact Component={Settings} />
        <Route path='/' Component={Dashword} />
      </Routes>
      {/* <Footer/> */}


    </div>
  )
}
export default App;