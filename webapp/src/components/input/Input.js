import React, { useState } from 'react'
import { css } from '@emotion/core'
import { any, func, string } from 'prop-types'

const styles = css`

`

export function Input (props) {
  const { mutation } = props
  const emptyObject = {
    'id': '',
    'user_id': '',
    'description': '',
    'merchant_id': '',
    'debit': false,
    'credit': false,
    'amount': 0.00
  }
  const [ current, setCurrent ] = useState(emptyObject)

  function handleClick () {
    console.log('click')
    // assume the input is valid
    mutation(current)
    setCurrent(emptyObject)
  }

  function handleChange (changeKey, change) {
    console.log('handle')
    let changes = {}
    changes[changeKey] = change
    let temp = current
    for (const key in temp) {
      if (changes[key]) {
        if (key === 'amount') {
          changes[key] = parseFloat(changes[key])
        }
        temp[key] = changes[key]
        break
      }
    }
    setCurrent(temp)
  }

  return (
    <div css={styles}>
      This is the input page.
      {
        Object.keys(current).map((key) => {
          if (key === 'debit' || key === 'credit') {
            return (
              <div key={key}>
                {key}
                <input
                  checked={current[key]}
                  key={key}
                  onChange={(event) => { handleChange(key, event.target.checked) }}
                  type='checkbox'
                />
              </div>
            )
          } else {
            return (
              <FormElement
                key={key}
                label={key}
                onChange={(v) => { handleChange(key, v) }}
                value={current[key]}
              />
            )
          }
        })
      }

      <button onClick={handleClick} >Submit</button>
    </div>
  )
}

Input.propTypes = {
  mutation: func
}

function FormElement (props) {
  const { label, value, onChange } = props
  const [ val, setValue ] = useState(value)

  return (
    <div>
      {label} <input onChange={event => {
        onChange(event.target.value)
        setValue(event.target.value)
      }
      } value={val} />
    </div>
  )
}

FormElement.propTypes = {
  label: string,
  value: any,
  onChange: func
}
