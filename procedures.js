import {divideByDualTypes} from "./DualTypeAnalize/util.js"
import * as repos from "./DAL/repos.js"

const POKEMON_PATH = "./DAL/pokemonData.json"

export function countDualTypes(){
    var DTs = divideByDualTypes(getAllPkm())

    DTs.resource.forEach(element => {
    console.log("  "+element.valueArray.length + "\t:" + element.key )
    })
}

export function dualTypesDetails(type1, type2){
    var DTs = divideByDualTypes(getAllPkm())
    var pkms = DTs.get([type1, type2])
    
    console.log()
    console.log([type1, type2])
    console.log(pkms)
    console.log()
}

export function loadFromBulba(){
    repos.loadFromLocalBulba(POKEMON_PATH);
}

function loadFromPokeApi(){
    repos.updateLocalDataFromApi(POKEMON_PATH);
}

export function getAllPkm(){
    return repos.getPokemon(POKEMON_PATH)
}
