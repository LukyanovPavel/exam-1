import styles from './components.module.css'

type ScoreBoard = {
    value: number
    error: boolean
}

export const ScoreBoard = (props: ScoreBoard) => {
    return (
        <input className={`${styles.score} ${props.error && styles.error}`} type="text" value={props.value} disabled={true}/>
    )
}