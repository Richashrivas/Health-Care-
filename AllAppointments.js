import { useSelector } from "react-redux"

export default function AllAppointments()
{
    const user = useSelector(state=>state.authInfo.value);
    const patient = useSelector(state=>state.patientInfo.value);
    console.log('all  ',patient);

    return <>
    <section className="featured-job-area ">
      <div className="container">
      {/* <div className="row align-items-center mt-10 mb-60">
          
   </div> */}
        <div className="row d-flex">
          <div className="col-lg-12">
            <div className="section-tittle text-center mt-15">
              <span style={{ fontSize: "30px" }}>PATIENTS LIST</span>
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
                  <th scope="col">Patient Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Age</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Diagnosis</th>
                  <th scope="col">Appointment Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              {/*<tbody className="divide-y divide-gray-200 bg-white">
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
                      <div className="text-sm text-gray-500">
                      {data?.email}
                      </div>
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
                  
              </tbody> */}
            </table>
          </div>
          
        </div>
      </div>
    </section>
    {/* {msg && <h4 style={{ color: 'red' }}>{msg}</h4>} */}
  </>
}

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { deletePatientReducer, listPatientReducer, updatePatientReducer } from "../../redux/PatientSlice";
// import ApiServices, { ApiUrls } from "../../apiService/ApiServices";

// export default function AllAppointments() {
//   const user = useSelector((state) => state.authInfo.value);
//   const patient = useSelector((state) => state.patientInfo.value);
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const patientList = async () => {
//     try {
//       setLoading(true);
//       const resp = await ApiServices.GetApiCall(ApiUrls.PATIENT_LIST,user.token
//       );
//       console.log(resp);
//       if (resp.data.status) {
//         setMsg(resp.data.data.msg);
//         dispatch(listPatientReducer(resp.data.data));
//       }
//     } catch (error) {
//       setMsg("Network Error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const dele = async (id) => {
//     const confrm = window.confirm("Are You Sure to Delete ?");
//     if (confrm) {
//       try {
//         const URL = ApiUrls.CLINIC_DELETE + id;
//         const resp = await ApiServices.PutApiCall(URL, null, user.token);
//         console.log(resp);
//         if (resp.data.status) {
//           setMsg(resp.data.msg);
//           const nlist = patient.filter((ob) => ob.id !== resp.data.data.id);
//           dispatch(deletePatientReducer(nlist));
//         } else {
//           setMsg(resp.data.msg);
//         }
//       } catch (error) {
//         setMsg("Netowrk Error");
//       }
//     } else {
//       setMsg("Data not Deleted");
//     }
//   };

//   useEffect(() => {
//     patientList();
//   }, []);

//   const Cupdate = (ob) => {
//     dispatch(updatePatientReducer(ob));
//     navigate("/updateClinic");
//   };

//   return (
//     <>
//       <section className="contact-section">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <h2 className="contact-title">Clinic Details</h2>
//             </div>
//           </div>
//           <div className="row">
//             <b>{msg}</b>
//             <div className="col-lg-12 col-md-12">
//               {loading ? (
//                 <div class="spinner-border" role="status"></div>
//               ) : (
//                 <table
//                   className=" table table-responsive table-hover table-striped table-responsive-lg"
//                   style={{ fontSize: "20px" }}
//                 >
//                   <thead>
//                     <th>S.no</th>
//                     <th>Patient Name</th>
//                     <th>Phone</th>
//                     <th>Age</th>
//                     <th>Gender</th>
//                     <th>Diagnosis</th>
//                     <th>Appointment Date</th>
//                     <th>Time</th>
//                     <th>Status</th>
//                     <th>Action</th>
//                   </thead>
//                   <tbody>
//                     {patient?.map((ob, index) => (
//                       <tr>
//                         <td>{index + 1}</td>

//                         <td>{ob.name}</td>
//                         <td>{ob.phoneNumber}</td>
//                         <td>{ob.age}</td>
//                         <td>{ob.sex}</td>
//                         <td>{ob.daignosis}</td>
//                         <td>{ob.appointmentdate}</td>
//                         <td>{ob.time}</td>
//                         <td>{ob.activeStatus ? "Active" : "DeACtive"}</td>
//                         <td>
//                           <button
//                             className="btn btn-success btn-sm"
//                             onClick={() => Cupdate(ob)}
//                           >
//                             Update
//                           </button>
//                           &nbsp;{" "}
//                           <button
//                             className="btn btn-danger btn-sm"
//                             onClick={() => dele(ob.id)}
//                           >
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }