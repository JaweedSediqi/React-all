import Users from './Component/users'
import Nav from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/login';
import Rejester from './Component/regester';
import Home from './Component/Home';
// import Demo from './Component/Notfound';
import Notfound from './Component/Notfound';
// import Userss from './Component/Users';

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/users' Component={Users} />
        <Route path='/Notfound' Component={Notfound} />
        <Route path='/login' Component={Login} />
        <Route path='/Rejester' Component={Rejester} />
        <Route path='/' exact Component={Home} />
      </Routes>


    </div>
  )
}
export default App;