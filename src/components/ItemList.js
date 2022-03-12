import React from 'react'
import { ItemDetailContainer } from './ItemDetailContainer'

export const ItemList = ({data}) => {
  return (
    <ul className="[ cluster justify-center ] [ mx-auto ]">
      {data.map((id, i) => (
        <ItemDetailContainer key={i} id={id} />
      ))}
    </ul>
  )
}
