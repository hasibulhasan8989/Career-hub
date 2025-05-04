import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
      const[jobs,setJobs]=useState([])
      const [sliceJob,setSliceJob]=useState(4)
      useEffect(()=>{
        fetch('jobs.json')
        .then(ref=>ref.json())
        .then(data=>setJobs(data))
      },[])
   
    return (
        <div>
            <h1 className="text-5xl text-center">Featured Jobs {jobs.length}</h1>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-4">
                {
                    jobs.slice(0,sliceJob).map(job=><Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={sliceJob===jobs.length ?'hidden':''}>
            <button onClick={()=>{setSliceJob(jobs.length)}} className="btn btn-error ">Show All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;