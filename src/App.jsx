import Aside from './components/Aside'
import Pokemons from './components/pokemons'
function App() {
  return (
    <section className="bg-[#F6F8FC] bg-[url('/img/pokeball-icon.png')] bg-no-repeat h-screen font-outfit overflow-y-auto">
      <main className='max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] '>
        <Pokemons/>
        <Aside/>
      </main>
    </section>
  )
}

export default App
