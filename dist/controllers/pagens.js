"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const CreatMenuObjetor_1 = require("../helpers/CreatMenuObjetor");
const Pet_1 = require("../models/Pet");
const home = (req, res) => {
    let list = Pet_1.Pet.getAll;
    res.render("../views/pages/home.mustache", {
        b: {
            t: "todos os animais",
            back: "allanimals.jpg"
        },
        menu: (0, CreatMenuObjetor_1.createMenuObjeto)("all"),
        list
    });
};
exports.home = home;
const dogs = (req, res) => {
    let list = Pet_1.Pet.getFromType("dog");
    res.render("../views/pages/home.mustache", {
        b: {
            t: "Cachorros",
            back: "banner_dog.jpg"
        },
        menu: (0, CreatMenuObjetor_1.createMenuObjeto)("dog"),
        list
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    let list = Pet_1.Pet.getFromType("cat");
    res.render("../views/pages/home.mustache", {
        b: {
            t: "Gatos",
            back: "banner_cat.jpg"
        },
        menu: (0, CreatMenuObjetor_1.createMenuObjeto)("cat"),
        list
    });
};
exports.cats = cats;
const fishes = (req, res) => {
    let list = Pet_1.Pet.getFromType("fish");
    res.render("../views/pages/home.mustache", {
        b: {
            t: "Peixes",
            back: "banner_fish.jpg"
        },
        menu: (0, CreatMenuObjetor_1.createMenuObjeto)("fish"),
        list
    });
};
exports.fishes = fishes;
