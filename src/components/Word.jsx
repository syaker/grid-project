/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react'
import { GridContext } from '../context/GridContext'
import dictionary from '../utils/dictionary.json'
import './styles/Word.css'

const Word = () => {
  const { letters, state, word, setLetters, setState } = useContext(GridContext)
  const isValid = dictionary.words.includes(word.join('')) ? 'valid' : 'invalid'

  useEffect(() => {
    setState(isValid)
    setLetters([
      ...letters,
      <p
        key={String(Math.random()).split('.')[1]}
        className={`single-letter-${isValid}`}
      >
        {word.length <= 1
          ? word.join('').toUpperCase()
          : word.slice(-1)[0].toUpperCase()}
      </p>,
    ])
  }, [word])

  return (
    <>
      <div className="word">{letters}</div>
      <p className="placeholder">{state}</p>
    </>
  )
}

export default Word
