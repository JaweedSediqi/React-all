import Creat from "./Creat";
const Home = () => {
    const King=(name)=>{
        console.log("your name is  "+name);
    }
    return (
        <div className="mt-4 pt-5" >
            <Creat myfuction={King} />
        </div>
    )
}
export default Home;