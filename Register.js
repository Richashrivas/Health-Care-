import { useRef, useState } from "react"
import AuthApi, { url } from "../WebServise/AuthApi";
import { useNavigate } from "react-router-dom";

export default function Register()
{

    const navigate= useNavigate()
    const [msg, setMsg] = useState("")

    const userName = useRef();
    const mob = useRef();
    const email = useRef();
    const pass = useRef();

    const HandleSubmit = async(e) =>{
        e.preventDefault()

        var obj = {
            name:userName.current.value,
            phoneNumber : mob.current.value,
            email : email.current.value,
            password : pass.current.value,
        }
        console.log(obj)

        try{
            const response = await AuthApi.PostApiCall(url.REGISTER, obj);
            console.log("response : ",response);
            if(response.data.status){
                navigate('/')
                setMsg("Register Successfully...")
            }

        }catch(error){
            console.log("Network error.....")
            setMsg("Network error")
        }

    }

    return<div className="container pt-60">
         <div className="row d-flex align-items-center justify-content-center">
            <div className="col-12 mt-10 pt-30">
                <h3 className="contact-title text-center " >Register Here!</h3>
            </div>
            <div className="col-lg-8 mt-20 shadow-lg p-3 mb-5 bg-black" style={{borderRadius:'15px' , backgroundColor:'white'}}>
                <form className="form-contact contact_form p-3" onSubmit={HandleSubmit}>
                    <div className="row ">
                        <div className="col-sm-6 ">
                            <div className="form-group">
                            <label>Enter Name : </label>
                                <input className="form-control valid" ref={userName} id="Name" type="text" placeholder="Enter your Name" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label>Enter Mobile : </label>
                                <input className="form-control valid" ref={mob} id="email" type="Number" placeholder="Enter your Mobile"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label>Enter Email : </label>
                                <input className="form-control" ref={email} id="email" type="email"  placeholder="Enter your Email"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label>Enter Password : </label>
                                <input className="form-control" ref={pass} id="password" type="password"  placeholder="Enter password"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <input type="submit" value="Submit" className="button button-contactForm boxed-btn col-sm-4" />
                    </div>
                    <b style={{color:'lightgreen'}}>{msg}</b>
                </form>
            </div>
        </div>
    </div>
}