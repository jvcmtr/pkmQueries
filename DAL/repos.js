import {getAllPokemon} from "./fetch.js"
import * as fs from "fs";

const NUMBER_OF_POKEMON = 1017

export async function updateLocalDataFromApi(path){
    let data = await getAllPokemon(NUMBER_OF_POKEMON);
    let STRING = JSON.stringify(data);
    fs.writeFileSync(path, STRING)
}

export async function saveData(data, path){
    let STRING = JSON.stringify(data);
    fs.writeFileSync(path, STRING)
}

export function getPokemon(path){
    let str = fs.readFileSync(path)
    return JSON.parse(str)
}