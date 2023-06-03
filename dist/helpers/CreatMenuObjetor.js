"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuObjeto = void 0;
const createMenuObjeto = (menuoptions) => {
    let returnObjetor = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };
    if (menuoptions !== "") {
        returnObjetor[menuoptions] = true;
    }
    return returnObjetor;
};
exports.createMenuObjeto = createMenuObjeto;
