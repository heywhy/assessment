import React from 'react'
import type { Item } from 'models/data'
import styles from './ItemShape.module.css'

export const ItemShape = ({ shape, color }: Item) => {
  let child = <div className={styles[shape]} style={{ background: color }} />

  if (shape === 'triangle') {
    child = (
      <div
        className={styles[shape]}
        style={{ borderBottom: `5rem solid ${color}` }}
      />
    )
  }

  return (
    <div className="bg-white shadow rounded p-2 mr-2 mt-2 flex items-center">
      {child}
    </div>
  )
}
