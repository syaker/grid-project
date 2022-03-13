import { useContext } from 'react'
import './Card.css'
import dictionary from '../../assets/files/dictionary.json'
import { GridContext } from '../../context/GridContext.jsx'
import { gridAround } from '../../utils/findCell'

const Card = ({ id, letter }) => {
  const {
    rows,
    selectedCards,
    cellAround,
    setSelectedCards,
    setCellAround,
    word,
    setWord,
  } = useContext(GridContext)

  const isValid = dictionary.words.includes(word.join('')) ? 'valid' : 'invalid'

  const changeState = (id) => {
    setSelectedCards([...selectedCards, id])
    setCellAround(gridAround(id, rows))
    setWord([...word, letter.toLowerCase()])
  }

  return (
    <button
      id={id}
      onClick={() => changeState(id)}
      disabled={!cellAround.includes(id) && cellAround.length > 0}
      className={`card ${selectedCards.includes(id) ? isValid : ''}`}
    >
      <p className="letter">{letter}</p>
    </button>
  )
}

export default Card
