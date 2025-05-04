import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { saveApplication } from "../StoredApplications/StoredApplications";



const JobDetails = () => {
    const {id}=useParams()
    const newId=parseInt(id)
    const jobsDetail=useLoaderData()
    const handleToast=()=>{
        toast('Applied Successfully')
        saveApplication(newId)
    }
    
   const newJob=  jobsDetail.find(job=>job.id === newId)
    const{job_title,job_description,job_responsibility,educational_requirements}=newJob
    
    return (
        <div>
            <div  className="grid grid-cols-4 gap-4">
                <div className="border rounded-2xl p-14 col-span-3 space-y-4">
                    <h1 className="text-2xl">{job_title}</h1>
                    <p>{job_description}</p>
                    <p>{job_responsibility}</p>
                    <p>{educational_requirements}</p>
                </div>
                <div className="border rounded-2xl p-14">
                    <h1 className="text-4xl text-center mb-12">Job Details</h1>
                   <button onClick={()=>(handleToast())} className="btn btn-error w-full">Apply Now</button>
                </div>
                <ToastContainer />

            </div>
           

        </div>
    );
};

export default JobDetails;