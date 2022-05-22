import { FC } from 'react'
import styles from './components.module.css'

type ButtonType = {
    style: string
    name: string
    disabled?: boolean
    callback: () => void
    value?: number
}

export const Button:FC<ButtonType> = ({style, name, disabled, callback}) => {
    const onclickHandler = () => {
        callback()
    }

    return (
        <button className={style} onClick={onclickHandler} disabled={disabled}>{name}</button>
    )
}