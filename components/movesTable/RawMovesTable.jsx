import styles from 'styles/Savings.module.css'

export default function RawMovesTable ({ data }) {
  return (
    <div>
      <table className={styles.twTable}>
        <thead className={styles.twTableHead}>
          <tr>
            <th className={styles.twTableFirstColumn}>Fecha</th>
            <th className={`hidden 2xl:table-cell ${styles.twTableColumn}`}>Categoria</th>
            <th className={`hidden 2xl:table-cell ${styles.twTableColumn}`}>Subcategoria</th>
            <th className={`table-cell ${styles.twTableColumn}`}>Descripción</th>
            <th className={`table-cell ${styles.twTableColumn}`}>Importe</th>
            <th className={`hidden 2xl:table-cell ${styles.twTableColumn}`}>Saldo</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
          {
            data
              ? data.map((move, index) => {
                return (
                  <tr key={index} className='hover:bg-gray-50'>
                    <td className={styles.twTableFirstRow}>{move.operationDate}</td>
                    <td className={`hidden 2xl:table-cell ${styles.twTableRow}`}>{move.category}</td>
                    <td className={`hidden 2xl:table-cell ${styles.twTableRow}`}>{move.subcategory}</td>
                    <td className='max-w-xs lg:max-w-md truncate text-sm table-cell px-3 py-4 border-gray-200 border-b whitespace-nowrap'>{move.description}</td>
                    <td className={`table-cell ${styles.twTableRow}`}>{move.amount}</td>
                    <td className={`hidden 2xl:table-cell ${styles.twTableRow}`}>{move.balance}</td>
                  </tr>
                )
              })
              :
              <tr className='hover:bg-gray-50'>
                <td colSpan={6} className='px-6 py-4'>No hay datos</td>
              </tr>
          }
        </tbody>
      </table>
    </div>
  )
};
