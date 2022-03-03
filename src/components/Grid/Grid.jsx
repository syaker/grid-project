/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react'
import { GridContext } from '../../context/GridContext.jsx'
import { getRandomNumber } from '../../utils/findCell.js'
import alphabet from '../../utils/test-board-1.json'
import Card from '../Card/Card.jsx'
import './Grid.css'

const Grid = () => {
  let { grid } = useContext(GridContext)
  const [isLoading, setIsLoading] = useState(true)
  const [cards, setCards] = useState([])

  useEffect(() => {
    let count = 0
    let temp = []
    while (count < grid * grid) {
      temp.push(
        <Card
          id={count + 1}
          key={count}
          letter={alphabet.board[getRandomNumber(0, grid * grid - 1)]}
          grid
        />
      )
      count++
    }
    // Añadiendo los valores al array luego de que termine el bucle
    setCards(temp)
    setIsLoading(false)
  }, [])

  return <div className="grid">{!isLoading && cards.map(value => value)}</div>
}

export default Grid
