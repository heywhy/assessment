import React, { useEffect, useMemo, useState } from 'react'
import { withDefaultLayout } from 'layout'
import classNames from 'classnames'
import { withAuth } from 'components/auth'
import data from 'src/data.json'
import { Item } from 'models/data'
import { ItemShape } from 'components/ItemShape'

const items = data as Item[]

const toUniqList = (list: string[]) => Array.from(new Set(list))

const colors = toUniqList(items.map(({ color }) => color))
const shapes = toUniqList(items.map(({ shape }) => shape))

const COLORS_SIZE = colors.length
const SHAPES_SIZE = shapes.length

type ChangeArgs = {
  colors: string[]
  shapes: string[]
}

type FiltersProps = {
  onChange: (args: ChangeArgs) => void
}

const Filters = (props: FiltersProps) => {
  const [colors$, setColors] = useState([...colors])
  const [shapes$, setShapes] = useState([...shapes])

  useEffect(() => {
    if (colors$.length === 0) {
      return setColors([...colors])
    }
    if (shapes$.length === 0) {
      return setShapes([...shapes])
    }
    props.onChange({ colors: colors$, shapes: shapes$ })
  }, [colors$.length, shapes$.length])

  const toggle = (
    item: string,
    list: string[],
    cb: (val: string[]) => void
  ) => {
    const index = list.indexOf(item)
    if (index > -1) {
      list.splice(index, 1)
      cb([...list])
    } else {
      cb([...list, item])
    }
  }

  return (
    <>
      <div className="mt-4">
        <h2 className="capitalize text-blue-500">shapes</h2>
        <div className="mt-4 flex flex-wrap items-center sm:space-x-3">
          {shapes.map((val) => (
            <button
              key={val}
              className={classNames(
                'capitalize text-sm rounded-3xl border mr-1 mt-1 sm:mt-0 py-1 px-3',
                {
                  'bg-blue-100': shapes$.includes(val),
                  'border-blue-300': shapes$.includes(val),
                }
              )}
              onClick={() => toggle(val, shapes$, setShapes)}
            >
              {val}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="capitalize text-blue-500">colors</h2>
        <div className="mt-4 flex items-center space-x-3">
          {colors.map((val) => (
            <button
              key={val}
              className={classNames(`capitalize text-sm rounded-full h-6 w-6`, {
                'border-blue-300 border': !colors$.includes(val),
                'border-blue-800 border-2': colors$.includes(val),
              })}
              style={{ backgroundColor: val }}
              onClick={() => toggle(val, colors$, setColors)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

function Home() {
  const [colors, setColors] = useState<string[]>([])
  const [shapes, setShapes] = useState<string[]>([])

  const filtered = useMemo(() => {
    if (colors.length === COLORS_SIZE && shapes.length === SHAPES_SIZE) {
      return { title: 'All items', items }
    }
    if (shapes.length === SHAPES_SIZE && colors.length === 1) {
      const [color] = colors
      const list = items.filter((item) => item.color === color)

      return { title: `All ${color} items`, items: list }
    }
    if (colors.length === COLORS_SIZE && shapes.length === 1) {
      const [shape] = shapes
      const list = items.filter((item) => item.shape === shape)

      return { title: `All ${shapes[0]} items`, items: list }
    }
    if (colors.length === 1 && shapes.length > 0) {
      const [color] = colors
      const list = items.filter(
        (item) => item.color === color && shapes.includes(item.shape)
      )

      return { title: `Multiple ${color} items`, items: list }
    }
    if (shapes.length === 1 && colors.length > 0) {
      const [shape] = shapes
      const list = items.filter(
        (item) => item.shape === shape && colors.includes(item.color)
      )
      return { title: `Multiple ${shapes[0]} items`, items: list }
    }

    if (shapes.length === 1 && colors.length === 1) {
      const list = items.filter(
        (item) => item.shape === shapes[0] && item.color === colors[0]
      )
      return { title: `Multiple ${shapes[0]} items`, items: list }
    }
    const list = items.filter(
      (item) => colors.includes(item.color) && shapes.includes(item.shape)
    )

    return { title: 'Multiple items', items: list }
  }, [colors.length, shapes.length])

  return (
    <>
      <h1 className="capitalize text-lg font-bold">filters</h1>

      <Filters
        onChange={({ colors, shapes }) => {
          setColors(colors)
          setShapes(shapes)
        }}
      />

      <h2 className="mt-8">{filtered.title}:</h2>

      <div className="flex flex-row flex-wrap">
        {filtered.items.map((item, index) => (
          <ItemShape key={index} {...item} />
        ))}
      </div>
    </>
  )
}

export default withAuth(withDefaultLayout(Home))
