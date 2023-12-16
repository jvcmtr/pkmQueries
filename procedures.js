import {divideByDualTypes} from "./DualTypeAnalize/util.js"
import * as repos from "./DAL/repos.js"
import { keyValue } from "./DualTypeAnalize/dict.js"

const POKEMON_PATH = "./DAL/pokemonData.json"

export function countDualTypes(){
    var DTs = divideByDualTypes(getAllPkm())

    DTs.resource = DTs.resource.sort((a,b) => a.valueArray.length - b.valueArray.length)

    DTs.resource.forEach(element => {
    console.log("  "+element.valueArray.length + "\t:" + element.key )
    })

    return DTs
}

export function countDualTypes_LastEvolutionsOnly(){
    var DTs = divideByDualTypes(getAllPkm())

    DTs.resource.forEach(e => e.valueArray = removeFirstEvolutions(e.valueArray))
    DTs.resource = DTs.resource.sort((a,b) => a.valueArray.length - b.valueArray.length)

    DTs.resource.forEach(element => {
    console.log("  "+element.valueArray.length + "\t:" + element.key )
    })

    return DTs
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


function removeFirstEvolutions(pkmn_array){
    let _copy = [...pkmn_array]
    pkmn_array.forEach(poke =>{
        if(poke.evolution_line != null){
            _copy = _copy.filter(e => e.id != poke.evolution_line)
        }
    })
    return _copy
}