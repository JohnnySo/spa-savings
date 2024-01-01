'use server'

import { request, gql } from 'graphql-request'

export async function fetchTotalsByYears (values) {
    const document = gql`{
      getReport(years: [${values}]) {
          data {
              years
              income
              expense
              totalSaved
          }
      }
  }`
    return await request(process.env.SAVINGS_API_URL + '/graphql', document)
}

export async function fetchTotalsByCategory (values) {
    const document = gql`{
        getReport(years: [${values}]) {
            dataByCategory {
                year
                expenseByCategory {
                    category
                    amount
                }
                expenseBySubcategory {
                    category
                    amount
                }
            }
        }
    }`
    return await request(process.env.SAVINGS_API_URL + '/graphql', document)
}