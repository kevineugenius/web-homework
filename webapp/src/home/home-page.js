import React, { Fragment } from 'react'
// import { useQuery } from '@apollo/client'
// import GetTransactions from '../gql/transactions.gql'
import { TxTable } from '../components/transactions/TxTable'
import { array } from 'prop-types'

export function Home (props) {
  // const { loading, error, data = {} } = useQuery(GetTransactions)
  let loading = false
  let error = false
  let { transactions } = props

  if (loading) {
    return (
      <Fragment>
        Loading...
      </Fragment>
    )
  }

  if (error) {
    return (
      <Fragment>
        ¯\_(ツ)_/¯
      </Fragment>
    )
  }

  return (
    <Fragment>
      <TxTable data={transactions} />
    </Fragment>
  )
}

Home.propTypes = {
  transactions: array
}
