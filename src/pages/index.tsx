import React, { useEffect, useMemo, useState } from 'react'
import { withDefaultLayout } from 'layout'
import classNames from 'classnames'
import { withAuth } from 'components/auth'

const COLORS_SIZE = 5
const SHAPES_SIZE = 5

const colors = [
  'bg-red-500',
  'bg-blue-500',
  'bg-green-500',
  'bg-yellow-300',
  'bg-gray-500',
]
const shapes = ['oval', 'round', 'triangle', 'square', 'rectangle']

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
              className={classNames(
                `capitalize text-sm rounded-full h-6 w-6 ${val}`,
                {
                  'border-blue-300 border': !colors$.includes(val),
                  'border-blue-800 border-2': colors$.includes(val),
                }
              )}
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

  const filterTitle = useMemo(() => {
    if (colors.length === COLORS_SIZE && shapes.length === SHAPES_SIZE) {
      return 'All items'
    }
    if (shapes.length === SHAPES_SIZE && colors.length === 1) {
      const [_, color] = colors[0]?.split('-') || []
      return `All ${color} items`
    }
    if (colors.length === COLORS_SIZE && shapes.length === 1) {
      return `All ${shapes[0]} items`
    }
    if (colors.length === 1 && shapes.length > 0) {
      const [_, color] = colors[0]?.split('-') || []
      return `Multiple ${color} items`
    }
    if (shapes.length === 1 && colors.length > 0) {
      return `Multiple ${shapes[0]} items`
    }

    if (shapes.length === 1 && colors.length === 1) {
      return `Multiple ${shapes[0]} items`
    }

    return 'Multiple items'
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

      <h2 className="mt-8">{filterTitle}:</h2>
    </>
  )
}

export default withAuth(withDefaultLayout(Home))
