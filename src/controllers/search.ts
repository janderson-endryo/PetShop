import { Request,Response } from "express";
import {Pet} from "../models/Pet"
import {createMenuObjeto} from "../helpers/CreatMenuObjetor"


export const search = (req:Request, res:Response) =>{

    let query: string = req.query.pesquisar as string

    let list = Pet.getFromNome(query)

    if(!query) {
        res.redirect("/")
        return
    }

    res.render("../views/pages/home.mustache",{
        menu: createMenuObjeto(""),
        list,
        query
    })
}