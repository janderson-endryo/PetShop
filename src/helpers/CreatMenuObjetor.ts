type menuoptions = "" | "all" | "dog" | "cat" | "fish"  

export const createMenuObjeto = (menuoptions:menuoptions) => {

    let returnObjetor = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if(menuoptions !== "") {
        returnObjetor[menuoptions] = true
    }

    return returnObjetor
}