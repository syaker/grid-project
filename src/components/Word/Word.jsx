/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react'
import { GridContext } from '../../context/GridContext'
import dictionary from '../../assets/files/dictionary.json'
import './Word.css'

const Word = () => {
  const { letters, state, word, setLetters, setState } = useContext(GridContext)
  const isValid = dictionary.words.includes(word.join('')) ? 'valid' : 'invalid'

  useEffect(() => {
    if (state !== isValid) {
      setState(isValid)
    } else {
      setLetters([
        ...letters,
        <p
          key={String(Math.random()).split('.')[1]}
          className={`single-letter-${state}`}
        >
          {word.length <= 1
            ? word.join('').toUpperCase()
            : word.slice(-1)[0].toUpperCase()}
        </p>,
      ])
    }
  }, [word])

  useEffect(() => {
    const statusWord = word.map((letter) => {
      return (
        <p
          key={String(Math.random()).split('.')[1]}
          className={`single-letter-${state}`}
        >
          {letter.toUpperCase()}
        </p>
      )
    })
    setLetters(statusWord)
  }, [state])

  return (
    <>
      <div className="word">{letters}</div>
      <p className="placeholder">{state}</p>
    </>
  )
}

export default Word
