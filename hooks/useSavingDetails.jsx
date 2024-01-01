import { useEffect, useState } from 'react'
import * as Constants from '@/components/Constants'

export default function useSavingDetails (savingPeriod) {

  const [totals, setTotals] = useState({ totalReturn: savingPeriod.totalReturn, income: savingPeriod.income, expense: savingPeriod.expense })
  const [movements, setMovements] = useState({ original: savingPeriod?.movementDTOS, filtered: savingPeriod?.movementDTOS, filter: Constants.SAVINGS_MOVEMENT_FILTER_ALL })

  const handleFilterCategoryClick = (category) => {
    setMovements((prevMovements) => {
      return {
        original: prevMovements.original,
        filtered: category === Constants.SAVINGS_MOVEMENT_FILTER_ALL ? prevMovements.original : prevMovements.original.filter(m => m.category === category),
        filter: category
      }
    })
  }

  useEffect(() => {
    setTotals((prevTotals) => {
      const categoryExpense = savingPeriod.totalReturnByCategory.filter(cat => cat.key === movements.filter)[0]
      return {
        totalReturn: prevTotals.totalReturn,
        income: savingPeriod.income,
        expense: categoryExpense ? categoryExpense.amount : savingPeriod.expense
      }
    })
  }, [movements, savingPeriod])

  const handleUpdateMovement = (data) => {
    setMovements((prevMovements) => {
      const originalMovesToNotEdit = prevMovements.original.filter((m) => m.id !== data.id)
      const filteredMovesToNotEdit = prevMovements.filtered.filter((m) => m.id !== data.id)
      const moveToEdit = prevMovements.original.filter((m) => m.id === data.id)[0]
      const editedMoveInGeneralState = { ...moveToEdit, comment: data.comment }
      return {
        original: [...originalMovesToNotEdit, editedMoveInGeneralState].sort(compareMovementDescendingOrder),
        filtered: [...filteredMovesToNotEdit, editedMoveInGeneralState].sort(compareMovementDescendingOrder),
        filter: prevMovements.filter
      }
    })
  }

  return {
    totals,
    movements,
    handleFilterCategoryClick,
    handleUpdateMovement,
  }
}

const compareMovementDescendingOrder = (a, b) => {
  if (a.order < b.order) return 1
  else if (a.order > b.order) return -1
  else return 0
}