import Avator from './Avator';
import List from './list';
import Nav from './Nav'
import Skils from './skils';
const Home = () => {
    return (
        <>
            <Nav />
            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card p-2" style={{ borderColor: 'black', borderWidth: '2px' }}>

                            <Avator/>
                            <Skils/>
                            <div className="row">
                                <div className="col-md-6">
                                    <List  name='In the na' mycolor='red'/>
                                </div>
                                <div className="col-md-6">
                                <List  name='In the nh' mycolor='yellow'/>
                                </div>
                                <div className="col-md-6">
                                <List  name='In the na' mycolor='black'/>
                                </div><div className="col-md-6">
                                <List  name='In the na' mycolor='blue'/>
                                </div><div className="col-md-6">
                                <List  name='In the na' mycolor='pink'/>
                                </div><div className="col-md-6">
                                <List  name='In the nh' mycolor='orange'/>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home;