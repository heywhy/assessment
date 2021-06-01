import classNames from 'classnames'
import { ButtonHTMLAttributes, FC } from 'react'

import styles from './Button.module.css'

type Attrs = 'type' | 'className' | 'disabled' | 'onClick'

type Props<T = HTMLButtonElement> = Pick<ButtonHTMLAttributes<T>, Attrs> & {
  label: string
  flat?: boolean
  sm?: boolean
  icon?: React.ReactNode
}

export const UIButton: FC<Props> = ({
  type = 'button',
  className,
  flat,
  sm,
  ...props
}) => {
  const classes = classNames(styles['UIButton'], className, {
    [String(styles['UIButton__Flat'])]: flat,
    [String(styles['UIButton__Primary'])]: !flat,
    [String(styles['UIButton__Small'])]: sm,
  })

  return (
    <button type={type} className={classes} {...props}>
      {props.icon}
      {props.label}
    </button>
  )
}
