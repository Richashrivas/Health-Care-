import { useDispatch, useSelector } from "react-redux";
import DoctorApi, { url } from "../../WebServise/DoctorApi";
import { useEffect, useState } from "react";
import { RecepListReducer, deleteRecpReducer, updateRecpReducer } from "../../Redux/SaveRecSlice";
import { useNavigate } from "react-router-dom";

export default function ReceptionList() 
{
  const user = useSelector(state => state.authInfo.value);
  console.log("users : ",user);
  
  const receList = useSelector(state => state.saveInfo.value);
  console.log("Reception : ", receList);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');

  const list = async ()=>{
   
    try{
      const res =  await DoctorApi.GetApi(url.RECEPTION_LIST, user.token);
      console.log("response : ", res);

      if(res.status) {
        const dis = dispatch(RecepListReducer(res.data.data));
        console.log(dis)
      }else{
        setMsg(res.data.msg || 'Failed to fetch reception list.');
      }

    } catch(error) {
      setMsg("Network Error")
    }

  };

  const UpdateFun=(data)=>{
    const dis = dispatch(updateRecpReducer(data));
    console.log('dissss: ',dis);
    navigate('/update_Reception');
  }

  const DeleteFun = async(id)=>{
    const uid = id;
    console.log(uid)
    var confirm = window.confirm('Are you sure? To Delete thid record.');
    
    if(confirm){
      try{
        const response = await DoctorApi.putApiCall(url.RECEPTION_DELETE+uid, null, user.token);
        console.log('new data: ', response);

        if(response.status){
          setMsg(response.data.msg);
          const newDataList = receList.filter((ob) => ob.id !== uid);
          console.log('Data : ', newDataList);
          const dis = dispatch(deleteRecpReducer(newDataList));
          console.log(dis);
        }else{
          setMsg(response.data.msg || 'Failed to delete reception.');
        }

      }catch(error){
        
      }
    }
      
  };
  
useEffect(() =>{
  list()
}, []);

  return (
    <>
      <section className="featured-job-area ">
        <div className="container">
        <div className="row align-items-center mt-40 mb-60">
            <div className="col-lg-7 col-md-12">
                <div className="about-img ">
                    <img src="assets/img/gallery/about.png" alt=""/>
                </div>
            </div>
            <div className="col-lg-5 col-md-12">
                <div className="about-caption">
                    <div className="section-tittle mb-35">
                        <h2>All Reception List 
                        !</h2>
                    </div>
                    <p className="pera-top mb-40">Here we Have world best receptions and Doctors are Work with use and support the Health care. who love with there works and honest with the community.</p>
                    <div className="icon-about">
                     <img src="assets/img/icon/about1.svg" alt="" className=" mr-20" />
                     <img src="assets/img/icon/about2.svg" alt="" />
                 </div>
             </div>
         </div>
     </div>
          <div className="row d-flex">
            <div className="col-lg-12">
              <div className="section-tittle text-center mt-15">
                <span style={{ fontSize: "30px" }}>Reception List</span>

                {/* <span>{msg}</span> */}
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-stretch mt-15 mb-3">
            <div className="col-xl-12 table-responsive">
              <table
                class="table table-striped table-hover"
                style={{ fontSize: "15px" }}
              >
                <thead>
                  <tr>
                    <th scope="col">Sr.no</th>
                    {/* <th scope="col">Id</th> */}
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Address</th>
                    <th scope="col">active Status</th>
                    <th scope="col">Operations</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-white">
                  { receList?.map((data, index) => 
                    <tr  className="divide-x divide-gray-200">
                      <td className="whitespace-nowrap ">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                               {index+1}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-12 py-12">
                        <div className="text-sm text-gray-900">
                         {data?.name}
                        </div>
                        {/* <div className="text-sm text-gray-500">
                        <b>email: </b> {data?.email}
                        </div> */}
                      </td>
                      <td className="whitespace-nowrap px-12 py-12">
                        <div className="text-sm text-gray-900">
                         {data?.phoneNumber}
                        </div>
                        
                      </td>
                      <td className="whitespace-nowrap px-12 py-12">
                        <div className="text-sm text-gray-900">
                         {data?.email}
                        </div>
                        
                      </td>
                      <td className="whitespace-nowrap px-12 py-12">
                        <div className="text-sm text-gray-900">
                         {data?.password}
                        </div>
                        
                      </td>
                      <td className="whitespace-nowrap px-12 py-12">
                        <div className="text-sm text-gray-900">
                         {data?.raddress}
                        </div>
                      </td>

                      <td className="whitespace-nowrap px-4 py-4">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        <td>{receList.status ? <b>Active</b>  : <b>DeActive</b> }</td>
                        </span>
                      </td>
                      <td><><button className="btn btn-sm" onClick={()=> UpdateFun(data)} >Edit</button></> &nbsp;<> <button className="btn btn-sm" onClick={() => DeleteFun(data.id)}>Delete</button></></td>
                    </tr>
                   )} 
                    
                </tbody>
              </table>
            </div>
            
          </div>
        </div>
      </section>
      {msg && <h4 style={{ color: 'red' }}>{msg}</h4>}
    </>
  );
}
