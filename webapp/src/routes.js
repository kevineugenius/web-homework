import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { css } from '@emotion/core'
import { Home } from './home'
import { Input } from './components/input/Input'

/**
 * I generally wouldn't put a bunch of logic in the router, but the way
 * this project is set up sort of makes it sensible to do it this way.
 * I would prefer to not use a router unless completely necessary and
 * just load components into a 'home' wrapper. Thus, I am effectively
 * treating this file as a wrapper.
 */
function AppRouter () {
  let rawData = require('../fakedata').data
  const [ transactions, setTransactions ] = useState(rawData.transactions)

  function handleTransactionChange (transaction) {
    let newState = transactions
    newState.push(transaction)
    setTransactions(newState)
  }

  return (
    <Router>
      <div css={layoutStyle}>
        <nav css={navStyle}>
          <ul >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/input'>Input Transactions</Link>
            </li>
          </ul>
        </nav>
        <div className='main-content' css={contentStyle}>
          <Route exact path='/' render={() => (<Home transactions={transactions} />)} />
          <Route exact path='/input' render={() =>
            (
              <Input
                mutation={handleTransactionChange}
              />
            )}
          />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter

const layoutStyle = css`
    display: grid;
    grid-row-gap: 24px;
    padding: 8px;
`

const navStyle = css`
  grid-row: 1;

  & > ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
  }
  
  & > ul > li:not(:first-of-type) {
    margin-left: 16px;
  }
`

const contentStyle = css`
  grid-row: 2;
`
