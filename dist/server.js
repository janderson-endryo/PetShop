"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes"));
// config dotenv
dotenv_1.default.config();
// config variavel express
const server = (0, express_1.default)();
// mustache
server.engine('mustache', (0, mustache_express_1.default)());
server.set('view engine', 'mustache');
server.set('views', path_1.default.join(__dirname + '/views'));
// pasta static
server.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
// config rotas
server.use(routes_1.default);
// config rota para pagina nao encontrada
server.use((req, res) => {
    res.render("pages/404.mustache");
});
// servidor
server.listen(process.env.PORT);
