import { Request,Response } from "express";

export const search = (req:Request, res:Response) =>{
    res.render("../views/index.mustache")
}