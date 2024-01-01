'use client'

import { useState } from 'react'
import Formatter from '@/components/Formatter'
import { NotCountableMovementIcon, PayrollIcon } from '@/components/Icons'
import EditMovementModal from '@/components/modal/EditMovementModal'
import styles from 'styles/Savings.module.css'

export default function MovesTable ({ totals, movements, updateMovement }) {
  const [show, setShow] = useState(false)
  const [modalData, setModalData] = useState({})

  function handleClick (event) {
    setModalData(JSON.parse(event.target.dataset.move))
    setShow(true)
  }

  return (
    <>
      <EditMovementModal open={show} setOpen={setShow} data={modalData} setData={setModalData} updateMovement={updateMovement} />
      <table className={styles.twTable}>
        <thead className={styles.twTableHead}>
          <tr>
            <th className={styles.twTableFirstColumn}>Fecha</th>
            <th className={`hidden 2xl:table-cell ${styles.twTableColumn}`}>Categoría</th>
            <th className={`hidden 2xl:table-cell ${styles.twTableColumn}`}>Subcategoría</th>
            <th className={`table-cell ${styles.twTableColumn}`}>Descripción</th>
            <th className={`table-cell ${styles.twTableColumn}`}>Ingreso</th>
            <th className={`table-cell ${styles.twTableColumn}`}>Gasto</th>
            <th className={`hidden 2xl:table-cell ${styles.twTableColumn}`}>Saldo</th>
            <th className={`hidden 2xl:table-cell ${styles.twTableColumn}`}>Info</th>
            <th className={`border-separate rounded-tr-lg ${styles.twTableColumn}`}></th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
          {
            movements && movements.length > 0 ? movements.map((move, index) => {
              return (
                <tr key={index} className={move.amount < -130 && move.isCountable ? 'bg-red-100 hover:bg-red-200' : 'hover:bg-gray-50'}>
                  <td className={styles.twTableFirstRow}>{Formatter.formatDate(move.operationDate)}</td>
                  <td className={`hidden 2xl:table-cell ${styles.twTableRow}`}>{move.category}</td>
                  <td className={`hidden 2xl:table-cell ${styles.twTableRow}`}>{move.subcategory}</td>
                  <td className='max-w-xs lg:max-w-md truncate text-sm table-cell px-3 py-4 border-gray-200 border-b whitespace-nowrap'>{move.description}</td>
                  <td className={`table-cell ${styles.twTableRow}`}>{move.amount > 0 ? Formatter.formatCurrencyWithoutSymbol(move.amount) : ''}</td>
                  <td className={`table-cell ${styles.twTableRow}`}>{move.amount < 0 ? Formatter.formatCurrencyWithoutSymbol(move.amount) : ''}</td>
                  <td className={`hidden 2xl:table-cell ${styles.twTableRow}`}>{Formatter.formatCurrencyWithoutSymbol(move.balance)}</td>
                  <td className={`hidden 2xl:table-cell ${styles.twTableRow}`}>
                    {move.isPayroll && <PayrollIcon />}
                    {move.isCountable === false && <NotCountableMovementIcon />}
                  </td>
                  <td className='relative text-sm table-cell px-3 py-4 border-gray-200 border-b whitespace-nowrap text-right'>
                    <button className='text-indigo-600 font-semibold' data-move={JSON.stringify(move)} onClick={(event) => handleClick(event)}>Editar</button>
                  </td>
                </tr>
              )
            })
              :
              <tr className='hover:bg-gray-50'>
                <td colSpan={9} className='text-align-center'>No hay datos</td>
              </tr>
          }
        </tbody>
        <tfoot>
          <tr className='font-bold'>
            <td className='table-cell 2xl:hidden px-4 py-2' colSpan={2}>{`Ahorro total: ${Formatter.formatCurrencyWithoutSymbol(totals.totalReturn)}`}</td>
            <td className='hidden 2xl:table-cell px-4 py-2' colSpan={4}>{`Ahorro total: ${Formatter.formatCurrencyWithoutSymbol(totals.totalReturn)}`}</td>
            <td className='px-4 py-2'>{Formatter.formatCurrencyWithoutSymbol(totals.income)}</td>
            <td className='px-4 py-2' colSpan={4}>{Formatter.formatCurrencyWithoutSymbol(totals.expense)}</td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}
