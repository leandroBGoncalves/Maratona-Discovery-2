const express = require("express")
const routes = express.Router()

// Tradus o que eu escrevi depois do =
/*const basePath = __dirname + "/views"
Tirei por que o ejs ja reconhece a pasta view e assim não precisa mais do caminho
*/

const views = __dirname + "/views/"

// req, res
routes.get('/', (req, res) => res.render(views + "/index"))
routes.get('/job', (req, res) => res.render(views + "/job"))
routes.get('/job-edit', (req, res) => res.render(views + "/job-edit"))
routes.get('/profile', (req, res) => res.render(views + "/profile"))

 module.exports = routes;