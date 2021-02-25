import React, { Fragment } from 'react'
// import { useQuery } from '@apollo/client'
// import GetTransactions from '../gql/transactions.gql'
import { TxTable } from '../components/transactions/TxTable'

export function Home () {
  // const { loading, error, data = {} } = useQuery(GetTransactions)
  let loading = false
  let error = false
  let data = require('../../fakedata').data

  console.log(data)

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
      <TxTable data={data.transactions} />
    </Fragment>
  )
}
