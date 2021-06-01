import React, { ChangeEvent, FC, InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import styles from './Input.module.css'

type SupportedInputAttrs =
  | 'name'
  | 'type'
  | 'value'
  | 'className'
  | 'placeholder'
  | 'min'
  | 'max'
  | 'step'

type Props<E = HTMLInputElement> = Pick<
  InputHTMLAttributes<E>,
  SupportedInputAttrs
> & {
  label: string
  errorMessage?: string
  onChange?: (value: string) => void
}

export const UIInput: FC<Props> = ({
  type = 'text',
  errorMessage,
  ...props
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    if (props.onChange) {
      props.onChange(value)
    }
  }

  const { onChange: changed, ...others } = props

  return (
    <div className={classNames(styles['UIInput'], props.className)}>
      <label htmlFor={`id-${props.name}`}>{props.label}</label>
      <input
        id={`id-${props.name}`}
        type={type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={onChange}
        value={props.value}
        {...others}
      />
      {errorMessage && (
        <span className={styles['UIInput__ErrorMessage']}>{errorMessage}</span>
      )}
    </div>
  )
}
