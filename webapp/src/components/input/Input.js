import React from 'react'
import { css } from '@emotion/core'
import { func } from 'prop-types'

const styles = css`

`

export function Input (props) {
  const { mutation } = props

  return (
    <div css={styles}>
      This is the input page.
      <button onClick={mutation(
        {
          'id': 'T03',
          'user_id': 'U03',
          'description': 'Refund',
          'merchant_id': 'M02',
          'debit': false,
          'credit': true,
          'amount': 3.00
        }
      )} />
    </div>
  )
}

Input.propTypes = {
  mutation: func
}
