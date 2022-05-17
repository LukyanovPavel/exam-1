import React, {useState} from 'react';
import style from './App.module.css';
import {ScoreBoard} from "./components/ScoreBoard";
import {Button} from "./components/Button";


function App() {

    let [inc, setInc] = useState(0)

    const increment = () => {
        setInc(++inc)
    }
    const reset = () => {
        setInc(0)
    }

    let error = inc > 4

    return (
        <div className={style.wrap}>
            <div className={style.App}>
                <ScoreBoard
                    value={inc}
                    error={error}
                />
                <div>
                    <Button
                        name={'inc'}
                        disabled={inc > 4}
                        callback={increment}
                    />
                    <Button
                        name={'reset'}
                        disabled={!(inc > 0)}
                        callback={reset}
                        value={inc}
                    />
                </div>
            </div>
        </div>

    )
}

export default App;
