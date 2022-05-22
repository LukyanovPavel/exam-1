import React, {FC, useEffect, useState} from 'react';
import stylesApp from '../App.module.css';
import stylesComponents from './components.module.css';
import {Button} from './Button';
import {ScoreBoard} from './Scoreboard';

type IncCounterType = {
    startValue: number
    currentValue: number
    incButton: () => void
    updateError: (errorMessage: string) => void
    error: string,
}

export const IncCounter: FC<IncCounterType> = ({startValue, currentValue, incButton, error}) => {

    const incButtonHandler = () => {
        incButton()
    }
    const reset = () => {

    }

    return (
        <div>
            <div className={stylesApp.App}>
                <ScoreBoard
                    value={currentValue}
                />

                <div>
                    <Button
                        style={stylesComponents.button_inc}
                        name={'inc'}
                        callback={incButtonHandler}
                    />
                    <Button
                        style={stylesComponents.button_inc}
                        name={'reset'}
                        callback={reset}
                        //value={}
                    />
                </div>
            </div>
        </div>
    );
};