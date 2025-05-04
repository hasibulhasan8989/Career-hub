// max-h-[40px] max-w-[120px]

import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const { id,logo,job_title,company_name,location ,job_type,salary,remote_or_onsite} = job;
  return (
    <div className="card bg-base-100 shadow-sm border p-6 ">
      <figure className="">
        <img
        className="max-h-[40px] max-w-[120px]"
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title">
          {job_title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
         {company_name}
        </p>
        <div className="flex gap-4">
            <button className="btn bg-white rounded border border-[#7E90FE] text-[#9873FF] font-bold">{remote_or_onsite}</button>
            <button className="btn bg-white rounded border border-[#7E90FE] text-[#9873FF] font-bold" >{job_type}</button>
        </div>
        <div className="card-actions">
          <div className="badge badge-outline">{location}</div>
          <div className="badge badge-outline">{salary}</div>
          
        </div>
        <Link to={`/job/${id}`}><button className="btn bg-[#9873FF] max-w-30">View Details</button></Link>
        
      </div>
    </div>
  );
};

export default Job;
