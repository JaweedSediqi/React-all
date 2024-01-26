import imgg from './images/1.jpg';
function Pizza(props) {
    return ( <>
    <h6>{props.name}</h6>
    <p>{props.p}</p>
    <img src={props.img}  className='img-fluid'  alt="a new image"  />
    </> );
}

export default Pizza;