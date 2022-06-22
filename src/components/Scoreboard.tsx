import {ChangeEvent, FC, useState} from 'react'
import styles from './components.module.css'

type ScoreBoard = {
    title?: string
    value: number
    callback?: (value: string) => void
    style?: string
}

export const ScoreBoard: FC<ScoreBoard> = ({value, title, callback, style}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback && callback(e.currentTarget.value)
    }

    return (
        <input
            title={title}
            className={styles.score + ' ' + style}
            type="text"
            value={value}
            onChange={onChangeHandler}
        />
    )
}