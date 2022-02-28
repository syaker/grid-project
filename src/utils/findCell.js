const assignValues = (grid) => {
  // Filas
  const rows = {
    0: [],
    1: [],
    2: [],
    3: [],
  }

  let count = 0
  // Asignar valores a las columnas en las filas
  Object.keys(rows).forEach((key) => {
    while (Object.values(rows[key]).length < grid) {
      rows[key].push(count + 1)
      count++
    }
  })

  return rows
}

// Cuadriculas alrededor
const gridAround = (id, rows) => {
  let cell
  // Identificar fila y columna
  Object.keys(rows).forEach((key) => {
    if (rows[key].includes(id))
      cell = { row: Number(key), column: Number(rows[key].indexOf(id)) }
  })

  let cellAvailables = []

  const { column, row } = cell

  // Hallar cuadricula
  const findGridAround = (row, column) => {
    cellAvailables = []
    let positionRow = -1
    while (positionRow < 2) {
      let positionColumn = -1
      if (rows[row + positionRow]) {
        while (positionColumn < 2) {
          if (rows[row + positionRow][column + positionColumn] !== id)
            cellAvailables.push(
              rows[row + positionRow][column + positionColumn]
            )
          positionColumn++
        }
      }
      positionRow++
    }
  }

  findGridAround(row, column)

  return cellAvailables.filter(e => e !== undefined)
}

// Obtener numero en un intervalo
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1))

export { assignValues, gridAround, getRandomNumber }
