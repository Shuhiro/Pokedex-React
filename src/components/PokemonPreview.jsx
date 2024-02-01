import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PokemonPreview = ({ pokemonURL }) => {
    const [pokemon, setPokemon] = useState(null)

    const colorByType = {
        normal: 'bg-[#BCBCAC] text-gray-800',
        fighting: 'bg-[#BC5442] text-white',
        flying: 'bg-[#669AFF] text-white',
        poison: 'bg-[#AB549A] text-white',
        ground: 'bg-[#DEBC54] text-gray-800',
        rock: 'bg-[#BCAC66] text-gray-800',
        bug: 'bg-[#ABBC1C] text-white',
        ghost: 'bg-[#6666BC] text-white',
        steel: 'bg-[#ABACBC] text-white',
        fire: 'bg-[#FF421C] text-white',
        water: 'bg-[#2F9AFF] text-white',
        grass: 'bg-[#78CD54] text-white',
        electric: 'bg-[#FFCD30] text-gray-800',
        psychic: 'bg-[#FF549A] text-white',
        ice: 'bg-[#78DEFF] text-gray-800',
        dragon: 'bg-[#7866EF] text-white',
        dark: 'bg-[#785442] text-white',
        fairy: 'bg-[#FFACFF] text-gray-800',
        shadow: 'bg-[#0E2E4C] text-white',
    }

    useEffect(() => {
        axios.get(pokemonURL)
            .then(({ data }) => setPokemon(data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <article className='text-center bg-white rounded-[30px] relative font-semibold capitalize pb-4 shadow-lg shadow-slate-400/10  border-2 border-transparent hover:border-slate-200 cursor-pointer group grid gap-2'>
            <header className='h-9'>
                <img
                    className='absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 group-hover:scale-110 transition-transform pixelated'
                    src={pokemon?.sprites.versions["generation-v"]["black-white"].front_default}
                    alt={pokemon?.name} />
            </header>
            <span className='text-sm text-slate-500'>N° {pokemon?.id}</span>
            <h4 className='text-lg'>{pokemon?.name}</h4>
            <ul className='flex gap-2 justify-center'>
                {pokemon?.types.map(type =>
                    <li className={`p-1 rounded-md px-2 ${colorByType[type.type.name]}`} key={type.type.name}>{type.type.name}</li>)}
            </ul>
        </article>
    )
}

export default PokemonPreview