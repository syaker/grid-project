import Grid from './components/Grid/Grid.jsx'
import Word from './components/Word/Word.jsx'
import './App.css'
import { useContext } from 'react'
import { GridContext } from './context/GridContext.jsx'

const App = () => {
  const {
    setWord,
    setCellAround,
    setLetters,
    setCellAvailables,
    setSelectedCards,
    setState,
  } = useContext(GridContext)
  const resetGame = () => {
    setWord([])
    setLetters([])
    setCellAround([])
    setState('')
    setCellAvailables([])
    setSelectedCards([])
  }
  return (
    <>
      <div className="container">
        <section className="container-grid">
          <Grid />
        </section>
        <section className="container-reset right-side">
          <div className="clear-word">
            <p className="p-word">clear word</p>
            <button className="btn-clear-word" onClick={resetGame}>
              X
            </button>
          </div>
        </section>
        <section className="container-word right-side">
          <div key={`container`} className="container-letter">
            <Word />
          </div>
        </section>
      </div>
    </>
  )
}

export default App
