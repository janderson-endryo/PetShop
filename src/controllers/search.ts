import { Request, Response } from "express";
import { Pet } from "../models/Pet"
import { createMenuObjeto } from "../helpers/CreatMenuObjetor"


export const search = (req: Request, res: Response) => {

    let query: string = req.query.pesquisar as string

    if (!query) {
        res.redirect("/")
        return
    }

    let list = Pet.getFromNome(query)
    let list2 = Pet.getFromCor(query)



    res.render("../views/pages/home.mustache", {
        menu: createMenuObjeto(""),
        list,
        list2,
        query

    })
}