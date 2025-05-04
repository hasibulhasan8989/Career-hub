const getApplication = () => {
  const storedApplication = localStorage.getItem("job-application");

  if (storedApplication) {
    const newStoredApplication = JSON.parse(storedApplication);
    return newStoredApplication;
  }
  return [];
};

const saveApplication = (id) => {
  const jobsApplication = getApplication();
  const exits = jobsApplication.find((jobId) => jobId === id);
  if (!exits) {
    jobsApplication.push(id);
    localStorage.setItem("job-application", JSON.stringify(jobsApplication));
  }
};

export{saveApplication,getApplication}
