import * as repos from "./DAL/repos.js"
import * as DualType from "./DualTypeAnalize/UtilClasses.js"

const POKEMON_PATH = "./DAL/pokemonData.json"


await repos.updateLocalDataFromApi(POKEMON_PATH);
console.log("\tDONE !")


/*
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
    console.log(element.key + "\t:\t" + element.valueArray.length)
})
*/

/*
var pkms = repos.getPokemon(POKEMON_PATH)
console.log(pkms.length)
console.log(pkms[0])
console.log(pkms[4])
console.log(pkms[7])
*/
