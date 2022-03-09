import React from 'react'
import { Item } from './Item'

export const ItemList = ({data}) => {
  return (
    <ul className="[ cluster justify-center ] [ mx-auto ]">
      {data.map((props, i) => (
        <Item key={i} {...props} />
      ))}
    </ul>
  )
}
