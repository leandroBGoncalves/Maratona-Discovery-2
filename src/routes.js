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



// req, res
routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "/job"))
routes.get('/job-edit', (req, res) => res.render(views + "/job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))

 module.exports = routes;