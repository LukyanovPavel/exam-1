import {ChangeEvent, FC, useState} from 'react'
import styles from './components.module.css'

type ScoreBoard = {
    title?: string
    value: number
    callback?: (value: string) => void
}

export const ScoreBoard: FC<ScoreBoard> = ({value, title, callback}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback && callback(e.currentTarget.value)
    }

    return (
        <input
            title={title}
            className={styles.score}
            type="text"
            value={value}
            onChange={onChangeHandler}
        />
    )
}