import React, { useEffect, useRef, useState } from "react";
import {  useSelector } from "react-redux";
import DoctorApi, { url } from "../../WebServise/DoctorApi";


export default function UpdateReception()
{
    const user = useSelector((state)=>state.authInfo.value)
    console.log('user token ',user);
    // const updateData = useSelector((state)=>state.saveInfo.value);
    const updateData = useSelector(state => state.saveInfo.value)
    console.log('Update', updateData);

    const [msg, setMsg] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const nm = useRef()
    const em = useRef();
    const mob = useRef();
    const pass = useRef();
    const addr = useRef();

    const UpdateData = async(e) =>{
        e.preventDefault();

        if (
            !nm.current.value ||
            !em.current.value ||
            !mob.current.value ||
            !pass.current.value ||
            !addr.current.value
          ) {
            setMsg("Please fill out all the fields correctly");
            return;
          }

        var ob =  {
            name: nm.current.value,
            phoneNumber: mob.current.value,
            password: pass.current.value,
            email: em.current.value,
            raddress : addr.current.value
        };

        console.log('ob',ob)
         
        try{
            const URL = url.RECEPTION_UPDATE + updateData.id
           
            const response = await DoctorApi.putApiCall(URL, ob, user.token);
            console.log('response', response)

            if(response.data.status){
                setMsg(response.data.msg);
            }else{
                setMsg(response.data.msg || 'Failed to update reception.');
            }
        }catch(err){
            console.log('Something went wrong');
        } 
    };


    // useEffect(() => {
    //     if (updateData) {
    //         setIsLoading(false);
    //     }

    // }, [updateData]);


    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    return(
        <div>
            <div className="row d-flex align-items-center justify-content-center">
            <div className="col-12 mt-10 pt-40 ">
                <h3 className="contact-title text-center ">Update Record.</h3>
            </div>
            <div className="col-lg-8 mt-20 shadow-lg p-3 mb-5 bg-black " style={{borderRadius:'15px' , backgroundColor:'white'}}>
                <form className="form-contact contact_form p-5" onSubmit={UpdateData}>
                    <div className="row mt-10">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Enter your Name</label>
                                <input 
                                    defaultValue={updateData.name}
                                    className="form-control valid" 
                                    ref={nm} name="name" 
                                    id="name" type="text" 
                                    placeholder="Enter Name"
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Enter your Mobile No.</label>
                                <input 
                                    defaultValue={updateData.phoneNumber} 
                                    className="form-control valid" 
                                    ref={mob} name="phoneNumber" 
                                    id="phoneNumber" type="Number" 
                                    placeholder="Enter Mobile"
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Enter your  Email</label>
                                <input 
                                    defaultValue={updateData.email}
                                    className="form-control valid" 
                                    ref={em} name="email" id="email" 
                                    type="email" 
                                    placeholder="Enter Email"
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Enter the Password</label>
                                <input 
                                    defaultValue={updateData.password} 
                                    className="form-control" ref={pass} 
                                    name="Password" id="password" 
                                    type="text"  
                                    placeholder="Enter Password"
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Enter your Address</label>
                                <input 
                                    defaultValue={updateData.raddress} 
                                    className="form-control" 
                                    ref={addr} name="Address"
                                    id="raddress" type="text"  
                                    placeholder="Enter Address"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <button type="submit" className="button button-contactForm boxed-btn col-sm-4 ">update</button>
                    </div>
                </form>
                
            </div>
            
        </div>
        {msg && <h4 style={{ color: 'red' }}>{msg}</h4>}
        </div>
    )
}

//  {data.name} {data.email}   {data.phoneNumber}  {data.email} {data.password} {data.raddress}
