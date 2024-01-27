import Pokemons from './components/pokemons'
import Aside from './components/aside'
function App() {
  return (
    <section>
      <main className='max-width-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 h-screen'>
        <Pokemons/>
        <Aside/>
      </main>
    </section>
  )
}

export default App
