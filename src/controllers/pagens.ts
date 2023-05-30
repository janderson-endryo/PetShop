import { Request,Response } from "express";

export const home = (req:Request, res:Response) =>{
    res.render("../views/index.mustache")
}

export const dogs = (req:Request, res:Response) =>{
    res.render("../views/index.mustache")
}

export const cats = (req:Request, res:Response) =>{
    res.render("../views/index.mustache")
}

export const fishes = (req:Request, res:Response) =>{
    res.render("../views/index.mustache")
}
