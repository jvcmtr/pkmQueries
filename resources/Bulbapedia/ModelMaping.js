import Pokemon from "../../DLL/Pokemon.js"
import { Console, assert } from "console";
import data from "./data.json" assert { type: "json" };
import data2 from "./data2.json" assert {type: "json"};


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

function toPokemon2(obj){
    let p = new Pokemon()
    p.name = obj.name.english
    p.dexN = obj.id
    p.id = obj.id
    p.types = obj.type
    
    if(obj.evolution.prev != null){
        p.evolution_line = obj.evolution.prev[0]
    }

    if(obj.abilities != null){
        p.abilities = obj.ability.map(e=>e[0])
    }

    if(obj.base != null){
        p.stats.hp = obj.base.HP
        p.stats.attack = obj.base.attack
        p.stats.defense = obj.base.defense
        p.stats.special_attack = obj.base["Sp. Attack"]
        p.stats.special_defense = obj.base["Sp. Defense"]
        p.stats.speed = obj.base.Speed
    }

    return p
}

export function getAllPokemon(LIMIT){
    if(!LIMIT)
        LIMIT = data2.length
    let list = []

    for(let i = 0; i < LIMIT; i++) {
        if(i>data2.length){
            break
        }
        const element = data2[i];
        list.push(toPokemon2(element))
    }
    return list;
}