import mycontext from "./Context";
import { useContext } from "react";
const Creat = () => {
    let our_name_section=useContext(mycontext);
    return (
        <div className="mt-1 pt-1" >
            <p>my creat section is {our_name_section.name2}</p>
        </div>
    )
}
export default Creat;