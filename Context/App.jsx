import Home from "./Component/Home";
import Creat from "./Component/Creat";
import Navbar from "./Component/Navbar";
import mycontext from "./Component/Context"

const App=()=>{
    return (
        <>
       < mycontext.Provider
          value={{
              name1:"section1",
              name2:"section2",
          }}
       
       >
  
       <Navbar/>
       <Home/>
       <Creat/>
       </  mycontext.Provider>
        </>
    )
}
export default App;