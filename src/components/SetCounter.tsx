import React, {FC, useEffect, useState} from 'react';
import stylesComponents from './components.module.css';
import {Button} from './Button';
import {ScoreBoard} from './Scoreboard';

type SetCounter = {
    startValue: number,
    maxValue: number,
    setButton: (startTitle: number, maxTitle: number) => void
}

export const SetCounter: FC<SetCounter> = ({startValue, maxValue, setButton}) => {

    const [startTitle, setStartTitle] = useState(0)
    const [maxTitle, setMaxTitle] = useState(0)

    const updateStartInputHandler = (valueInput: string) => {
        setStartTitle(Number(valueInput))
    }
    const updateMaxInputHandler = (valueInput: string) => {
        setMaxTitle(Number(valueInput))
    }

    const setButtonHandler = (startTitle: number, maxTitle: number,) => {
        setButton(startTitle, maxTitle)
    }

    return (
        <div>
            <div className={stylesComponents.App}>
                <ScoreBoard
                    title={'start value'}
                    value={startTitle}
                    callback={updateStartInputHandler}
                />
                <ScoreBoard
                    title={'max value'}
                    value={maxTitle}
                    callback={updateMaxInputHandler}
                />
                <div>
                    <Button
                        style={stylesComponents.button_set}
                        name={'set'}
                        callback={()=>setButtonHandler(startTitle, maxTitle)}
                    />
                </div>
            </div>
        </div>
    );
};