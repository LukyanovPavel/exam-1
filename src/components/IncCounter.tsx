import React, {FC, useEffect, useState} from 'react';
import stylesApp from '../App.module.css';
import stylesComponents from './components.module.css';
import {Button} from './Button';
import {ScoreBoard} from './Scoreboard';

type IncCounterType = {
    startValue: number
    maxValue: number
    currentValue: number
    incButton: () => void
    resetButton: () => void
    updateError: (errorMessage: string) => void
    error: string,
}

export const IncCounter: FC<IncCounterType> = ({startValue, maxValue, currentValue, incButton, error, resetButton}) => {

    const incButtonHandler = () => {
        incButton()
    }
    const reset = () => {
        resetButton()
    }

    let style = currentValue < maxValue ? stylesComponents.score_correct : stylesComponents.score_incorrect

    return (
        <div>
            <div className={stylesApp.App}>
                <ScoreBoard
                    value={currentValue}
                    style={style}
                />

                <div>
                    <Button
                        style={stylesComponents.button_inc}
                        name={'inc'}
                        callback={incButtonHandler}
                        disabled={currentValue === maxValue}
                    />
                    <Button
                        style={stylesComponents.button_inc}
                        name={'reset'}
                        callback={reset}
                        disabled={startValue === currentValue}
                    />
                </div>
            </div>
        </div>
    );
};