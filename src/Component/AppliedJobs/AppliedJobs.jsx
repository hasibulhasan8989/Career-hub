import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getApplication } from "../StoredApplications/StoredApplications";




const AppliedJobs = () => {
    const jobs=useLoaderData()
    const [appliedJobs,setAppliedJobs]=useState([])
    const [filterJobs,setFilterJobs]=useState([])

   const handleFilter=(filter)=>{
    if(filter==='All'){
        setFilterJobs(appliedJobs)
    }
    else if(filter=='Remote') {
        const Remote=appliedJobs.filter(job => job.remote_or_onsite==='Remote')
        setFilterJobs(Remote)
    }
    else if(filter==='Onsite'){
        const Onsite=appliedJobs.filter(job => job.remote_or_onsite==='Onsite')
        setFilterJobs(Onsite)
    }



   }
  console.log(filterJobs)

    useEffect(()=>{
        const storedId=getApplication()
        if (jobs.length>0){
            const appliedJob=jobs.filter(job=> storedId.includes(job.id))
            setAppliedJobs(appliedJob)
            setFilterJobs(appliedJob)
        }
    },[jobs])

    return (

        <div>
           <div className="flex justify-end">
           <details className="dropdown justify-end">
           <summary className="btn m-1">open or close</summary>
           <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
             <li onClick={()=>{handleFilter("All")}}><a>All</a></li>
             <li onClick={()=>{handleFilter("Remote")}}><a>Remote</a></li>
             <li onClick={()=>{handleFilter("Onsite")}}><a>Onsite</a></li>
            
           </ul>
           </details>
           </div>




           <h1>Applied Jobs : {appliedJobs.length}</h1> 

           {
           filterJobs.map(job=><li key={job.id}>{job.job_title} <span> : {job.remote_or_onsite}</span>  </li>)
           }
           
        </div>
    );
};

export default AppliedJobs;