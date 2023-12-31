import * as Api from "../resources/PokeApi/pokeapi_fetch.js"
import * as bulba  from "../resources/Bulbapedia/ModelMaping.js"

import * as fs from "fs";

const NUMBER_OF_POKEMON = 1017 // currently

export async function updateLocalDataFromApi(path){
    let data = await Api.getAllPokemon(NUMBER_OF_POKEMON);
    let STRING = JSON.stringify(data);
    fs.writeFileSync(path, STRING)
}

export function loadFromLocalBulba(path){
    saveData(bulba.getAllPokemon(), path)
}

export function saveData(data, path){
    let STRING = JSON.stringify(data);
    fs.writeFileSync(path, STRING)
}

export function getPokemon(path){
    let str = fs.readFileSync(path)
    return JSON.parse(str)
}

