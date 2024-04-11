import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authReducer } from "../Redux/AuthSlice";

export default function Nav()
{
    const user = useSelector((state)=>state.authInfo.value) //useselector se store ka data access kiya hai.
    console.log("user ",user)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userLogout = () =>{
        dispatch(authReducer({isLogin: false, token: undefined, username:undefined ,
        type:undefined 
    })
    );
    localStorage.removeItem('userInfo')
    navigate('/')
    }
    return <>
     <header>
        <div className="header-area">
            <div className="main-header header-sticky">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-2 col-md-1">
                            <div className="logo">
                                {/* <Link to="/"><img src="assets/img/logo/logo.png" alt="" /></Link>
                                 */}
                                 <h2 style={{color:'#02b44e'}}>Health Center</h2>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-10 col-md-10">
                            
                            <div className="menu-main d-flex align-items-center justify-content-end">
                                <div className="main-menu f-right d-none d-lg-block">
                                <nav> 
                                    <ul id="navigation">
                                    {user.isLogin ?  (
                                    <> 
                                    
                                    {user.type == "doctor" ? ( <> 
                                        <li><Link to="/home">Home</Link></li>
                                        <li><Link to="/allApointments">Appointment</Link></li>
                                        <li><Link to="/saveReceptionist">Save Reception</Link></li>
                                        <li><Link to="/Reception_List">Reception List</Link></li>
                                        <li><Link to="/patient_List">All Patients List</Link></li>
                                    </>
                                    ) : (
                                    " "
                                    )}

                                    {user.type == 'reception' ? (<> 

                                        <li><Link to="/home">Home</Link></li>
                                        <li><Link to="/allAppointments">All Appointments</Link></li>
                                        <li><Link to="/new-Appointment">New Appointments</Link></li>
                                        {/* <li><Link to="/updateAppointments">Update Appointments</Link></li> */}
                                    </>
                                    ) : (" ")}
                                    
                                    </> 
                                    ): (
                                    <> 
                                        <li><Link to="/home">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/service">Services</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to="/">Login</Link></li>
                                        <li><Link to="/register">Register</Link></li>
                                    </>
                                    )}
                                            
                                    </ul>
                                </nav>
                                </div>
                                
                                {user.isLogin ? (<> 
                                    <div className="header-right-btn f-right d-none d-lg-block ml-15">
                                    <Link to="/home" className="btn header-btn" onClick={userLogout}>Logout</Link>
                                </div>
                                </>) : (<>
                                    <div className="header-right-btn f-right d-none d-lg-block ml-15">
                                    <Link to="#" className="btn header-btn">Make an Appointment</Link>
                                </div>
                                
                                </>
                                )}
                                
                            </div>
                        </div>   
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
}