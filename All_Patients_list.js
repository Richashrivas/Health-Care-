export default function All_Patients_list()
{
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
                    {/* <th scope="col">Id</th> */}
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Address</th>
                    <th scope="col">Operations</th>
                  </tr>
                </thead>

                {/* <tbody className="divide-y divide-gray-200 bg-white">
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