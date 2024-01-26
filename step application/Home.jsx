import { useState } from "react";
function Home() {
    let messege = ['in the name of Allah ', 'my name is jaweed ', 'my last name is sedqi'];
    let [step, setStep] = useState(1);
    let [isopen,seIsopen]=useState(true);
    const king=()=>{
        seIsopen(false);
    }
    return (<>
    {
        (isopen &&
                <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 offset-md-4 ">
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div className={step>=1?'active': ""}>1</div>
                            <div className={step>=2?'active': ""}>2</div> 
                            <div className={step>=3?'active': ""}>3</div>
                        </div>
                        <button onClick={king} className="btn btn-outline-info"style={{float:'right'}}>&times;</button>
                        <h2 className="text-center my-5">Step:{step} {messege[step - 1]} </h2>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <button onClick={Next} className="btn btn-outline-info"  >Next</button>
                            <button onClick={Precious} className="btn btn-outline-info"  >Previous</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    </>);
    function Next() {
        if (step < 3)
            setStep((e) => e + 1);
    }
    function Precious() {
        if (step > 1)
            setStep((e) => e - 1);
    }
}

export default Home;