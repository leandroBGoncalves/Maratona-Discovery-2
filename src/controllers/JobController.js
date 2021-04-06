const Job = require('../model/Job')
const JobUtils = require('../Utils/jobUtils')
const Profile = require('../model/Profile')

module.exports = {

    index(req, res) {

        const jobs = job.get();
        const profile = Profile.get();

        const updateJobs = jobs.map((job) => {
        const remaining = JobUtils.remainingDays(job)
        const status = remaining <= 0 ? 'done' : 'progress'
        
        return {
            ...job,
            remaining,
            status,
            budget: JobUtils.calculateBudget(job, profile["value-hour"])
        }
    })


    
    return res.render("index", { jobs: updateJobs })
    

  },

  create(req, res) {
   return res.render("job")
  },
  
  save(req, res) {
    // req.bory{ name: 'leandro', 'daily-hours': '2.5', 'total-hours': '5' }
    const jobs = Job.get();

    const lastId = jobs[jobs.length - 1] ? jobs[jobs.length - 1].id : 0
      //const lastId = jobs[jobs.length - 1]?.id || 1;
  
      jobs.push({
          id: lastId + 1,
          name: req.body.name,
          "daily-hours": req.body["daily-hours"],
          "total-hours": req.body["total-hours"],
          created_at: Date.now()
      })
      return res.redirect('/')
  },

  show(req, res) {
    
    const jobId = req.params.id

    const job = Job.data.find(job => Number(job.id) === Number(jobId))

    if (!job) {
        return res.send('job not found!')
    }
    
    job.budget = Job.services.calculateBudget(job, Profile.data["value-hour"])
    
    return res.render("job-edit", { job })
  },

  update(req, res) {
      const jobId = req.params.id

      const job = Job.data.find(job => Number(job.id) === Number(jobId))

      if (!job) {
          return res.send('Job not found!')
      }

      const updatedJob = {
          ...job,
          name: req.body.name,
          "total-hours": req.body["total-hours"],
          "daily-hours": req.body["daily-hours"],
      }

      Job.data = Job.data.map(job => {
          if(Number(job.id) === Number(jobId)) {
              job = updatedJob
          }

          return job
      })

      res.redirect('/job/' + jobId)
  },

  delete(req, res) {
    const jobId = req.params.id

    Job.data = Job.data.filter(job => Number(job.id) !== Number(jobId))

    return res.redirect('/')
  }

}