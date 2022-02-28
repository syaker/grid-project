import { createContext, useEffect, useState } from 'react'
import { assignValues } from '../utils/findCell'

const GridContext = createContext()

const GridProvider = ({ children }) => {
  const [grid] = useState([4])
  const [rows, setRows] = useState([])
  const [word, setWord] = useState([])
  const [state, setState] = useState('invalid');
  const [letters, setLetters] = useState([])
  const [cellAvailables, setCellAvailables] = useState([])
  const [cellAround, setCellAround] = useState([])
  const [selectedCards, setSelectedCards] = useState([]);
  useEffect(() => setRows(assignValues(grid)), [grid])
  
  return (
    <GridContext.Provider
      value={{
        grid,
        rows,
        word,
        letters,
        cellAround,
        cellAvailables,
        selectedCards,
        state,
        setRows,
        setWord,
        setCellAround,
        setLetters,
        setCellAvailables,
        setSelectedCards,
        setState,
      }}
    >
      {children}
    </GridContext.Provider>
  )
}

export { GridProvider, GridContext }
