import React, {useState} from 'react';
import style from './App.module.css';
import {Button} from "./components/Button";
import {IncCounter} from './components/IncCounter';
import {ScoreBoard} from './components/Scoreboard';
import {SetCounter} from './components/SetCounter';


function App() {

    type stateType = {
        startValue: number,
        maxValue: number,
        currentValue: number
    }

    const [state, setState] = useState<stateType>({
        startValue: 0,
        maxValue: 0,
        currentValue: 0
    })

    const [error, setError] = useState('')

    const setButton = (startValue: number, maxValue: number,) => {
        setState({...state, startValue, maxValue, currentValue: startValue})
    }

    const incButton = () => {
        let currentValue = state.currentValue
        if(state.currentValue < state.maxValue) {
            currentValue += 1
        }
        setState({...state, currentValue: currentValue})
    }

    const updateError = (messageError: string) => {
        setError(messageError)
    }

    return (
        <div className={style.wrap}>
            <SetCounter startValue={state.startValue}
                        maxValue={state.maxValue}
                        setButton={setButton}
            />
            <IncCounter startValue={state.startValue}
                        currentValue={state.currentValue}
                        incButton={incButton}
                        error={error}
                        updateError={updateError}
            />
        </div>

    )
}

export default App;
