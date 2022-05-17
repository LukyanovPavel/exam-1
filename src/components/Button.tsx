import styles from './components.module.css'

type ButtonType = {
    name: string
    disabled: boolean
    callback: () => void
    value?: number
}

export const Button = (props: ButtonType) => {
    const onclickHandler = () => {
        props.callback()
    }

    return (
        <button className={styles.button} onClick={onclickHandler} disabled={props.disabled}>{props.name}</button>
    )
}