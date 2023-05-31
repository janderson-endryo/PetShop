import { Request,Response } from "express";
import{createMenuObjeto} from "../helpers/CreatMenuObjetor"
import {Pet} from "../models/Pet"

export const home = (req:Request, res:Response) =>{

    let list = Pet.getAll

    res.render("../views/pages/home.mustache",{
        b: {
            t:"todos os animais",
            back:"allanimals.jpg"
        },
        menu: createMenuObjeto("all"),

        list
    })
}

export const dogs = (req:Request, res:Response) =>{

    let list = Pet.getFromType("dog")
    res.render("../views/pages/home.mustache",{
        b: {
            t:"Cachorros",
            back:"banner_dog.jpg"
        },
        menu: createMenuObjeto("dog"),
        list
    })
}

export const cats = (req:Request, res:Response) =>{

    let list = Pet.getFromType("cat")
    res.render("../views/pages/home.mustache",{
        b: {
            t:"Gatos",
            back:"banner_cat.jpg"
        },
        menu: createMenuObjeto("cat"),
        list
    })
}

export const fishes = (req:Request, res:Response) =>{

    let list = Pet.getFromType("fish")
    res.render("../views/pages/home.mustache",{
        b: {
            t:"Peixes",
            back:"banner_fish.jpg"
        },
        menu: createMenuObjeto("fish"),
        list
    })
}
