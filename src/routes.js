const express = require("express")
const routes = express.Router()
const views = __dirname + "/views/"
// Tradus o que eu escrevi depois do =
/*const basePath = __dirname + "/views"
Tirei por que o ejs ja reconhece a pasta view e assim não precisa mais do caminho
*/


// Adicionando dados ao profile pelo ejs

const profile = {
    name: "Leandro",
    avatar: "https://avatars.githubusercontent.com/u/79161130?v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4
}

//Armazenando os dados profile

const jobs = [
    {
        id: 1,
        name: "Pizzaria do Leandro",
        "daily-hours": 2,
        "total-hours": 12,
        created_at: Date.now()
    },
    {
        id: 2,
        name: "OneTwo Projects",
        "daily-hours": 3,
        "total-hours": 38,
        created_at: Date.now()
    }
]



// req, res
routes.get('/', (req, res) => res.render(views + "index", { jobs }))
routes.get('/job', (req, res) => res.render(views + "/job"))
routes.post('/job', (req, res) => {
  // req.bory{ name: 'leandro', 'daily-hours': '2.5', 'total-hours': '5' }

  const lastId = jobs[jobs.length - 1] ? jobs[jobs.length - 1].id : 1
    //const lastId = jobs[jobs.length - 1]?.id || 1;

    jobs.push({
        id: lastId + 1,
        name: req.body.name,
        "daily-hours": req.body["daily-hours"],
        "total-hours": req.body["total-hours"],
        created_at: Date.now()
    })
    return res.redirect('/')
})
routes.get('/job-edit', (req, res) => res.render(views + "/job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))

 module.exports = routes;