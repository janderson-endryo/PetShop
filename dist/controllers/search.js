"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const Pet_1 = require("../models/Pet");
const CreatMenuObjetor_1 = require("../helpers/CreatMenuObjetor");
const search = (req, res) => {
    let query = req.query.pesquisar;
    let list = Pet_1.Pet.getFromNome(query);
    if (!query) {
        res.redirect("/");
        return;
    }
    res.render("../views/pages/home.mustache", {
        menu: (0, CreatMenuObjetor_1.createMenuObjeto)(""),
        list,
        query
    });
};
exports.search = search;
