import Pizza from "./Pizza";
import img1 from "./images/5.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";

function Menu() {
    return ( <>
    <h1 className="text-center mt-3 text-info">Our menu</h1>
    <div className="row">
        <div className="col-md-3">
        <Pizza name='one' img={img1} p={'one.....'} />
        </div>

        <div className="col-md-3">
        <Pizza name='two' img={img2} p={'tow.....'} />
        </div>

        <div className="col-md-3">
        <Pizza name='three' img={img3} p={'three.....'} />
        </div>

        <div className="col-md-3">
        <Pizza name='for' img={img4} p={'for.....'} />
        </div>
    </div>
    </> );
}

export default Menu;