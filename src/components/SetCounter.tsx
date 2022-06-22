import React, {FC, useEffect, useState} from 'react';
import stylesComponents from './components.module.css';
import {Button} from './Button';
import {ScoreBoard} from './Scoreboard';

type SetCounter = {
    startValue: number,
    maxValue: number,
    currentValue: number,
    setButton: (startTitle: number, maxTitle: number) => void
}

export const SetCounter: FC<SetCounter> = ({maxValue, currentValue, setButton}) => {

    const [startTitle, setStartTitle] = useState(0)
    const [maxTitle, setMaxTitle] = useState(0)
    const [disabled, setDisabled] = useState(true)
    const [style, setStyle] = useState('')

    const updateStartInputHandler = (valueInput: string) => {
        if(Number(valueInput).toString() !== 'NaN') {
            setStartTitle(Number(valueInput))
            Number(valueInput) < maxTitle ? setDisabled(false) : setDisabled(true)
        }
    }
    const updateMaxInputHandler = (valueInput: string) => {
        if(Number(valueInput).toString() !== 'NaN') {
            setMaxTitle(Number(valueInput))
            startTitle < Number(valueInput) ? setDisabled(false) : setDisabled(true)
        }
    }

    const setButtonHandler = (startTitle: number, maxTitle: number,) => {
        setButton(startTitle, maxTitle)
        setDisabled(true)
    }

    return (
        <div>
            <div className={stylesComponents.App}>
                <ScoreBoard
                    title={'start value'}
                    value={startTitle}
                    callback={updateStartInputHandler}
                    style={style}
                />
                <ScoreBoard
                    title={'max value'}
                    value={maxTitle}
                    callback={updateMaxInputHandler}
                    style={style}
                />
                <div>
                    <Button
                        style={stylesComponents.button_set}
                        name={'set'}
                        callback={() => setButtonHandler(startTitle, maxTitle)}
                        disabled={disabled}
                    />
                </div>
            </div>
        </div>
    );
};