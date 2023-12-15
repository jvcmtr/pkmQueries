import Pokemon from "../../DLL/Pokemon.js"
import { Console, assert } from "console";
import data from "./data.json" assert { type: "json" };


function toPokemon(obj){
    let p = new Pokemon()
    p.name = obj.name.english
    p.dexN = obj.id
    p.id = obj.id
    p.types = obj.type
    
    p.stats.hp = obj.base.HP
    p.stats.attack = obj.base.attack
    p.stats.defense = obj.base.defense
    p.stats.special_attack = obj.base["Sp. Attack"]
    p.stats.special_defense = obj.base["Sp. Defense"]
    p.stats.speed = obj.base.Speed
    
    return p
}

export function getAllPokemon(LIMIT){
    if(!LIMIT)
        LIMIT = data.length
    let list = []
    for(let i = 0; i < LIMIT; i++) {
        if(i>data.length){
            break;
        }
        const element = data[i];
        list.push(toPokemon(element))
    }
    return list;
}