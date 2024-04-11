import { useRef, useState } from "react"
import AuthApi, { url } from "../WebServise/AuthApi";
import { useDispatch } from "react-redux";
import { authReducer } from "../Redux/AuthSlice";
import { useNavigate } from "react-router-dom";

export default function Login()
{

    const [msg, setMsg] = useState("");

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const email = useRef();
    const pass = useRef();

    const HandleLogin = async (e)=>{
        e.preventDefault()

        var ob ={
            email : email.current.value,
            password : pass.current.value,
        }
        console.log(ob);

        try{
            const response = await AuthApi.PostApiCall(url.LOGIN , ob)
            console.log("response : ",response);
            if(response.data.status){
                // localStorage.setItem('user', JSON.stringify(response.data))
                const dis = dispatch(authReducer({isLogin: true, token: response.data.data.token, username: response.data.data.name, type: response.data.data.userType}))

                console.log(dis);
                navigate('/home')
                alert('Login Successfully')
                setMsg(response.data.message)
                
            }
            
        }catch(err){
            console.log('Network Error')
            setMsg('Network Error')
        }

    }

    return<div className="container pt-60" >
         <div className="row d-flex align-items-center justify-content-center">
            <div className="col-12 mt-10 pt-40 ">
                <h3 className="contact-title text-center  " >Login Here!</h3>
            </div>
            <div className="col-lg-8 mt-20 shadow-lg p-3 mb-5 bg-black " style={{borderRadius:'15px' , backgroundColor:'white'}}>
                <form className="form-contact contact_form p-5" onSubmit={HandleLogin}>
                    <div className="row mt-10">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Enter the Email</label>
                                <input className="form-control valid" ref={email} name="email" id="email" type="email" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Enter the Password</label>
                                <input className="form-control" ref={pass} name="Password" id="password" type="password"  placeholder="Enter Password"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <button type="submit" className="button button-contactForm boxed-btn col-sm-4 ">Send</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}