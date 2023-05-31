import express from "express";
import dotenv from "dotenv"
import mustache from "mustache-express"
import path from "path"
import router from "./routes";

// config dotenv
dotenv.config()

// config variavel express
const server = express()

// mustache
server.engine('mustache', mustache());
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname + '/views'));

// pasta static
server.use(express.static(path.join(__dirname, "../public")))

// config rotas
server.use(router)

// config rota para pagina nao encontrada
server.use((req,res)=>{
    res.render("pages/404.mustache")
})

// servidor
server.listen(process.env.PORT)

