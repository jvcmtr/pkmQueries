import * as repos from "./DAL/repos.js"
import * as DualType from "./DualTypeAnalize/UtilClasses.js"

const POKEMON_PATH = "./DAL/pokemonData.json"

repos.loadFromLocalBulba(POKEMON_PATH)

var DTs = new DualType.dict()
var pkms = repos.getPokemon(POKEMON_PATH)

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

DTs.resource.forEach(element => {
    console.log("  "+element.valueArray.length + "\t:" + element.key )
})


console.log(DTs.resource[0].key)
console.log(DTs.resource[0].valueArray)

console.log("")
console.log(DTs.resource[13].key)
console.log(DTs.resource[13].valueArray)

