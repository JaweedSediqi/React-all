let initial_item = [
    {
        id: 1,
        describtion: ' jaweed',
        packed: false,
        quality: 20
    },
    {
        id: 2,
        describtion: 'sediqi',
        packed: false,
        quality: 30
    },
    {
        id: 3,
        describtion: 'wahid',
        packed: false,
        quality: 40
    },
]
function Home() {
    return (<>
        <Logo />
        <Form />
        <PackingList />
        <Stats />
    </>);
}

export default Home;

function Logo() {
    return <h1 className="p-4 bgg text-light text-center "> ❤ For awy 💕</h1>
}
function Form() {
    function king(e){
        e.preventDefault();
        console.log(e);
    }

    function queen(){}
    

    return <form action="" onSubmit={king}>
        <div style={{display:'flex',marginTop:'-10px'}} className="  p-3 bg-warning" >
        <h3 className=" bbb ">What do you need for your trip </h3>
        <select>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
        </select>
        <input type="text" placeholder="item...."  />
        <button className="btn btn-outline-danger" onClick={queen} >  ok</button>
    </div>
    </form>
}
function PackingList() {
    return <div className="list" >
        <ul className=" text-center  ">
            {initial_item.map((e) => (
                <My_item item={e} />
            ))}
        </ul>
    </div>
}
function My_item({ item }) {
    return <div>
        <li><span style={item.packed ?{textDecoration:'line-through'}:{}} >{item.quality}{item.describtion}</span><button className="btn btn-outline-warning">&times;</button></li>
    </div>
}
function Stats() {
    return <footer>
        <em> you have x times on you list,and you already packed x (x%)</em>
    </footer>
}