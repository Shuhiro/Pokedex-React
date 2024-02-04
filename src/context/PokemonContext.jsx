import { createContext, useState } from "react";

const PokemonContext = createContext()

const PokemonProvider = ({ children }) => {
    const [showDetailPokemon, setShowDetailPokemon] = useState(false)
    
    const showPokemonById = () =>{
        setShowDetailPokemon(true);
    }

    const closePokemonDetails = () =>{
        setShowDetailPokemon(false)
    }

    return <PokemonContext.Provider value={{showDetailPokemon, showPokemonById, closePokemonDetails}}>
        {children}
    </PokemonContext.Provider>
}

export {
    PokemonContext,
    PokemonProvider
};