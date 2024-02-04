import Aside from './components/Aside'
import Pokemons from './components/pokemons'
import ModalPokemon from './components/ModalPokemon'
import usePokemonContext from './hooks/usePokemonContext'
function App() {
  const {showDetailPokemon,closePokemonDetails} =usePokemonContext()

  return (
    <section className="bg-[#F6F8FC] bg-[url('/img/pokeball-icon.png')] bg-no-repeat h-screen font-outfit overflow-y-auto">
      <main className='max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] '>
        <Pokemons/>
        <Aside/>
        <ModalPokemon showModal={showDetailPokemon} onCloseModal={closePokemonDetails}/>
      </main>
    </section>
  )
}

export default App
