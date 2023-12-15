import dict from "./dict.js"
import { AllDualTypes } from "./types.js";

export function divideByDualTypes(pkms){
    var DTs = AllTypesDict()

    pkms.forEach(pokemon => {
        let types = pokemon.types
        let OBJ = {
            name: pokemon.name,
            id: pokemon.id,
            evolution_line : pokemon.evolution_line,
            types :types
        }
        DTs.add(types, OBJ)
    });
    return DTs
}

function AllTypesDict(){
    var DTs = new dict()
    AllDualTypes.forEach(e => DTs.add(e))
    return DTs
}