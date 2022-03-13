const assignValues = (grid) => {
  // Filas
  const rows = []

  // Asignar valores a las columnas en las filas
  let count = 0
  for (let i = 0; i < grid; i++) {
    const row = []
    while (row.length < grid) {
      row.push(count + 1)
      count++
    }
    rows.push(row)
  }

  return rows
}

// Cuadriculas alrededor
const gridAround = (id, rows) => {
  let cell
  // Identificar fila y columna
  rows.forEach((row, index) => {
    if (row.includes(id)) cell = { row: index, column: Number(row.indexOf(id)) }
  })

  let cellAvailables = []

  const { column, row } = cell

  // Hallar cuadricula
  const findGridAround = (row, column) => {
    cellAvailables = []
    let positionRow = -1
    while (positionRow < 2) {
      if (rows[row + positionRow]) {
        let positionColumn = -1
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

  return cellAvailables.filter((e) => e !== undefined)
}

// Obtener numero en un intervalo
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1))

export { assignValues, gridAround, getRandomNumber }
