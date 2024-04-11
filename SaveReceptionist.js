import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import DoctorApi, { url } from "../../WebServise/DoctorApi";
import { RecepListReducer } from "../../Redux/SaveRecSlice";

export default function SaveReceptionist()
{
  const user = useSelector(state => state.authInfo.value);
  console.log('user : ', user);

  const Info = useSelector(state => state.saveInfo.value);
  console.log('userData : ', Info);


  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();


  const userNm = useRef();
  const userMob = useRef();
  const userMail = useRef();
  const userPass = useRef();
  const userAddress = useRef();
  
  const addData = async(e) => {
    e.preventDefault()
    var obj = {
      name : userNm.current.value,
      phoneNumber : userMob.current.value,
      email : userMail.current.value,
      password : userPass.current.value,
      raddress : userAddress.current.value
    }
    console.log("obj : ",obj)

    try{
      const res = await DoctorApi.postApiWithToken(url.SAVE_RECEPTION, obj, user.token);
      console.log("data : " ,res)
      
      if(res.data.status){
        const dis = dispatch(RecepListReducer([res.data]))
        console.log("dispatch : "+dis);
        setMsg(res.data.msg)
      }else {
        setMsg(res.data.msg)
    }
  
    }
    catch(error) {
      setMsg("Network Error")
    }

  }
  
  // useEffect(()=>{
    
  // },[])

  return<>
  <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row mt-5 p-5" >

    <div className="container mr-15">
    <div className="section-tittle text-center mt-15">
    <span style={{ fontSize: "30px" }}>Save New Reception </span>
  </div>
          <form onSubmit={addData} className="form-contact contact_form">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        className="form-control valid"
                        ref={userNm}
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        className="form-control valid"
                        ref={userMail}
                        name="email"
                        id="email"
                        type="email"
                 
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        className="form-control"
                        ref={userMob}
                        name="phone"
                        id="phone"
                        type="text"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        className="form-control"
                        ref={userPass}
                        name="password"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Clinic Address</label>
                      <input
                        className="form-control valid"
                        ref={userAddress}
                        name="raddress"
                        id="raddress"
                        type="text"
                        placeholder="Enter clinic address"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button
                    type="submit"
                    className="button button-contactForm boxed-btn"
                  >
                    Save
                  </button>
                </div>
              </form>
      <h4>{msg}</h4>
    </div>
  <hr/>
  
  <div className="section-tittle text-center mt-15">
    <span style={{ fontSize: "30px" }}>Reception Details</span>
  </div>
  <div className="container mt-4 p-2 " style={{borderRadius:"10px",boxShadow:"0px 0px 15px lightgrey", }}>
  
  {Info?.map ((ob, index)=> {
    return (
    <div className=" p-4" key={index}>
    <h2 className="inline-flex items-center text-lg font-semibold  "> 
      Name : {ob.data ? ob.data.name : 'N/A'} <span className="fa fa-user ml-2"> </span>
    </h2>
    <span className="mt-3 text-sm text-gray-600 " style={{fontSize:'15px'}}>
      Address : {ob.data ? ob.data.raddress : 'N/A'}
    </span> 

    <div className="mt-4">
      <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[20px] font-semibold text-gray-900" style={{fontSize:'13px'}}>
        Number : {ob.data ? ob.data.phoneNumber : 'N/A'}
      </span >
      <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[20px] font-semibold text-gray-900" style={{fontSize:'13px'}}>
        Email : { ob.data ? ob.data.email : 'N/A'}
      </span>
      <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[20px] font-semibold text-gray-900" style={{fontSize:'13px'}}>
        Password : {ob.data ? ob.data.password : 'N/A'}
      </span>
    </div>
  </div>
  )

  })}
    
  </div>
</div>

  </>
}