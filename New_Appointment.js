import { useRef, useState } from "react";
import DoctorApi, { url } from "../../WebServise/DoctorApi";
import { useSelector } from "react-redux";

export default function New_Appointment() 
{
    const user = useSelector(state=>state.authInfo.value);
    const userNm = useRef();
    const userAge = useRef();
    const userSex = useRef();
    const userMob = useRef();
    const userAddress = useRef();
    const userAppDate = useRef();

    const [msg, setMsg] = useState('');

    const add_Patient=async(e)=>{
        e.preventDefault();

        var ob = {
            name : userNm.current.value,
            age: userAge.current.value,
            sex : userSex.current.value,
            phoneNumber : userMob.current.value,
            raddress : userAddress.current.value,
            appointmentdate : userAppDate.current.value
        };

        console.log('obj : ',ob);
        try{

            const response = await DoctorApi.postApiWithToken(url.ADD_PATIENT, ob, user.token);
            console.log('all res :',response);
            if (response.data.status) {
                setMsg(response.data.msg);
                e.target.reset();
            } else {
                setMsg(response.data.msg);
            }

        }catch(err) {
            setMsg('')
            console.log('Somthing went wrong...')
        };
    };
    
  return (
    <>
      <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row mt-5 p-5">
        <div className="container mr-15">
          <div className="section-tittle text-center mt-15">
            <span style={{ fontSize: "30px" }}>Add New Appointment</span>
          </div>
          <form onSubmit={add_Patient} className="form-contact contact_form">
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
                  <label>Age</label>
                  <input
                    className="form-control valid"
                    ref={userAge}
                    name="age"
                    id="age"
                    type="Number"
                    placeholder="Enter your Age"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Gender</label>
                  <select
                    className="form-control form-select"
                    ref={userSex}
                    name="gender"
                    id="gender"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    </select>
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
                    type="Number"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Address</label>
                  <input
                    className="form-control valid"
                    ref={userAddress}
                    name="raddress"
                    id="raddress"
                    type="text"
                    placeholder="Enter Patient address"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Appointment Date</label>
                  <input
                    className="form-control"
                    ref={userAppDate}
                    name="appointmentdate"
                    id="appointmentdate"
                    type="Date"
                    placeholder="Enter your Appointment Date"
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
        <hr />

        <div className="section-tittle text-center mt-15">
          <span style={{ fontSize: "30px" }}>Reception Details</span>
        </div>
        {/* <div
          className="container mt-4 p-2 "
          style={{ borderRadius: "10px", boxShadow: "0px 0px 15px lightgrey" }}
        >
          {Info?.map((ob, index) => {
            return (
              <div className=" p-4" key={index}>
                <h2 className="inline-flex items-center text-lg font-semibold  ">
                  Name : {ob.data ? ob.data.name : "N/A"}{" "}
                  <span className="fa fa-user ml-2"> </span>
                </h2>
                <span
                  className="mt-3 text-sm text-gray-600 "
                  style={{ fontSize: "15px" }}
                >
                  Address : {ob.data ? ob.data.raddress : "N/A"}
                </span>

                <div className="mt-4">
                  <span
                    className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[20px] font-semibold text-gray-900"
                    style={{ fontSize: "13px" }}
                  >
                    Number : {ob.data ? ob.data.phoneNumber : "N/A"}
                  </span>
                  <span
                    className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[20px] font-semibold text-gray-900"
                    style={{ fontSize: "13px" }}
                  >
                    Email : {ob.data ? ob.data.email : "N/A"}
                  </span>
                  <span
                    className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[20px] font-semibold text-gray-900"
                    style={{ fontSize: "13px" }}
                  >
                    Password : {ob.data ? ob.data.password : "N/A"}
                  </span>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </>
  );
}

// import { useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import ApiServices, { ApiUrls } from "../../apiService/ApiServices";

// export default function NewAppointment() {
//   const user = useSelector((state) => state.authInfo.value);
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState(false);

//   const nameBox = useRef();
//   const genBox = useRef();
//   const phoneBox = useRef();
//   const ageBox = useRef();
//   const timeBox = useRef();
//   const dateBox = useRef();
//   const diagnoBox = useRef();

//   const patientsave = async (event) => {
//     event.preventDefault();
//     const ob = {
//       name: nameBox.current.value,
//       phoneNumber: phoneBox.current.value,
//       sex: genBox.current.value,
//       age: ageBox.current.value,
//       appointmentdate: dateBox.current.value,
//       time: timeBox.current.value,
//       daignosis: diagnoBox.current.value,
//     };
//     console.log(ob);
//     try {
//       setLoading(true);
//       const response = await ApiServices.PostApiWithHeaders( ApiUrls.PATIENT_SAVE,ob, user.token);
//       console.log("response", response);
//       if (response.data.status) {
//         setStatus(true);
//         setMsg(response.data.msg);
//         event.target.reset();
//       } else {
//         setStatus(false);
//         setMsg(response.data.msg);
//       }
//     } catch (error) {
//       setStatus(false);
//       setMsg("Network Issue");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <section className="contact-section">
//         <div className="container">
//           <div className="d-none d-sm-block mb-5 pb-4"></div>
//           <div className="row">
//             <div className="col-12">
//               <h2 className="contact-title">New Appointment</h2>
//             </div>
//             <div className="col-lg-12">
//               <form
//                 onFocus={() => setMsg("")}
//                 onSubmit={patientsave}
//                 className="form-contact contact_form"
//               >
//                 <div className="row">
//                   <div className="col-sm-6">
//                     <div className="form-group">
//                       <label>Name</label>
//                       <input
//                         className="form-control valid"
//                         ref={nameBox}
//                         name="name"
//                         id="name"
//                         type="text"
//                         onfocus="this.placeholder = ''"
//                         onblur="this.placeholder = 'Enter your name'"
//                         placeholder="Enter your name"
//                       />
//                     </div>
//                   </div>

//                   <div className="col-sm-6">
//                     <div className="form-group">
//                       <label>Phone Number</label>
//                       <input
//                         className="form-control"
//                         ref={phoneBox}
//                         name="phone"
//                         id="phone"
//                         type="number"
//                         onfocus="this.placeholder = ''"
//                         onblur="this.placeholder = 'Enter phone number'"
//                         placeholder="Enter phone number"
//                       />
//                     </div>
//                   </div>

//                   <div className="col-sm-6">
//                     <div className="form-group">
//                       <label>Gender</label>
//                       <select
//                         className="form-control form-select"
//                         ref={genBox}
//                         name="gender"
//                         id="gender"
//                       >
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div className="col-sm-6">
//                     <div className="form-group">
//                       <label>Age</label>
//                       <input
//                         className="form-control"
//                         ref={ageBox}
//                         name="age"
//                         id="age"
//                         type="number"
//                         onfocus="this.placeholder = ''"
//                         onblur="this.placeholder = 'Enter phone number'"
//                         placeholder="Enter Your Age"
//                       />
//                     </div>
//                   </div>
//                   <div className="col-sm-6">
//                     <div className="form-group">
//                       <label>Appointment Date</label>
//                       <input
//                         className="form-control"
//                         ref={dateBox}
//                         name="date"
//                         id="date"
//                         type="date"
//                         onfocus="this.placeholder = ''"
//                         onblur="this.placeholder = 'Enter phone number'"
//                       />
//                     </div>
//                   </div>

//                   <div className="col-sm-6">
//                     <div className="form-group">
//                       <label>Appointment Time</label>
//                       <input
//                         className="form-control"
//                         ref={timeBox}
//                         name="time"
//                         id="time"
//                         type="time"
//                       />
//                     </div>
//                   </div>
//                   <div className="col-sm-6">
//                     <div className="form-group">
//                       <label>Diagnosis For</label>
//                       <input
//                         className="form-control valid"
//                         ref={diagnoBox}
//                         name="name"
//                         id="name"
//                         type="text"
//                         onfocus="this.placeholder = ''"
//                         onblur="this.placeholder = 'Diagnosis For'"
//                         placeholder="Diagnosis For"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form-group mt-3">
//                   <button
//                     type="submit"
//                     className="button button-contactForm boxed-btn"
//                   >
//                     {loading ? "Saving..." : "Save"}
//                   </button>
//                 </div>
//                 <h3 className={status ? " alert alert-success" : "text-danger"}>
//                   {msg}
//                 </h3>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// patient slice

// import { createSlice } from "@reduxjs/toolkit";

// const slice = createSlice({
//   name: "patientDetails",
//   initialState: {
//     value: [],
//     upData: undefined,
//   },
//   reducers: {
//     listPatientReducer: (state, action) => {
//       state.value = action.payload;
//       console.log(action.payload);
//     },
//     deletePatientReducer: (state, action) => {
//       state.value = action.payload;
//       console.log(action.payload);
//     },
//     updatePatientReducer: (state, action) => {
//       state.upData = action.payload;
//     },
//   },
// });

// export const {
//   listPatientReducer,
//   deletePatientReducer,
//   updatePatientReducer,
// } = slice.actions;
// export default slice.reducer;
