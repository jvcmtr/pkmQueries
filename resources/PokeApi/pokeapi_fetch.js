let apiRoot = "https://pokeapi.co/api/v2/";
var getCongig = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

async function myFetch(path){
    let response = await fetch(path, getCongig)
    let data = await response.json()

    // debug
    if(data.name != null){
        console.log(`[${data.name}] Successfull \t uri: ${path.replace(apiRoot, "")}`)
    }else{
        console.log("## ERROR? nao contem nome")
    }

    return data
}

async function getPokemon(path){
    let POKEMON = {}
    let pokemonData = await myFetch(path)
    POKEMON.name = pokemonData.name
    POKEMON.id = pokemonData.id

    try{

        POKEMON.stats = {
            hp:0, attack:0, defense:0, 
            special_attack:0, special_defense:0,  speed:0 
        }
        pokemonData.stats.forEach(s=>{
            if(s.stat.name == "hp"){                POKEMON.stats.hp = s.base_stat}
            if(s.stat.name == "attack"){            POKEMON.stats.attack = s.base_stat}
            if(s.stat.name == "defense"){           POKEMON.stats.defense = s.base_stat}
            if(s.stat.name == "special_attack"){    POKEMON.stats.special_attack = s.base_stat}
            if(s.stat.name == "special_defense"){   POKEMON.stats.special_defense = s.base_stat}
            if(s.stat.name == "speed"){             POKEMON.stats.speed = s.base_stat}
        })
    
        POKEMON.moves = []
        pokemonData.moves.forEach(move => POKEMON.moves.push(move.move.name))
    
        POKEMON.types = []
        pokemonData.types.forEach(t=> POKEMON.types.push(t.type.name))
    
        POKEMON.abilities = []
        pokemonData.abilities.forEach(a=>{
            POKEMON.abilities.push({
                name: a.ability.name,
                is_hidden : a.is_hidden
            })
        })
    
    
        // SPECIE FETCH
        let specie = await myFetch(pokemonData.species.url)
        
        specie.pokedex_numbers.forEach(n=>{
            if(n.pokedex.name = "national"){
                POKEMON.dexN = n.entry_number
            }
        })

        POKEMON.is_baby= specie.is_baby
        POKEMON.is_legendary = specie.is_legendary
        POKEMON.is_mythical = specie.is_mythical
        POKEMON.has_gender_differences = specie.has_gender_differences
        
        POKEMON.shape = specie.shape? specie.shape.name : null
        POKEMON.color = specie.color? specie.color.name : null
        POKEMON.growth_rate = specie.growth_rate.name
        POKEMON.habitat = specie.habitat? specie.habitat.name : null
    
        POKEMON.egg_groups = []
        specie.egg_groups.forEach(a =>{ POKEMON.egg_groups.push(a.name) })
    
        POKEMON.evolution_line = specie.evolution_chain.url.replace("https://pokeapi.co/api/v2/evolution-chain", "")
    
        return  POKEMON
    }
    catch(e) {
        console.log("\n\n\n\n\n###########################################################\nERRO AO CARREGAR :")
        console.log(POKEMON)
        console.log(e)
    }
}

export async function getAllPokemon(LIMIT){
    let all = await myFetch(apiRoot+`pokemon?limit=${LIMIT}&offset=0`)
    all = all.results;

    let responseList = all.map(pokemonURL => getPokemon(pokemonURL.url));
    return Promise.all(responseList);
}
