// @flow
import * as React from 'react';
import {useState} from "react";
import styles from './counter.module.css'
import {Button} from "./Button";
import {Input} from "./Input";

type Props = {};

export const Counter = (props: Props) => {

    const [number, setNumber] = useState(0)

    const [maxNumber, setMaxNumber] = useState(5)

    const [initNumber, setInitNumber] = useState(5)

    const [isCounterReady, setIsCounterReady] = useState(true)

    const increaseHandler = () => {
        if (number < maxNumber) {
            setNumber(number + 1)
        }
    }

    const resetHanler = () => {
        setNumber(initNumber)
    }

    const setCounterReady = () => {
        setIsCounterReady(true)
        resetHanler()
    }

    const invalidValue = maxNumber <= initNumber
    const invalidInitValue = initNumber < 0 || maxNumber <= initNumber

    let counterValue = number.toString()

    if (invalidInitValue) {
        counterValue = 'incorrect value'
    } else if (!isCounterReady) {
        counterValue = "enter values and press 'set'"
    }



    return (
        <div>
            <h3>max value:</h3>
            <Input title={maxNumber} setTitle={setMaxNumber} invalid={invalidValue}
                   setIsCounterReady={setIsCounterReady}></Input>
            <h3>start value:</h3>
            <Input title={initNumber} setTitle={setInitNumber} invalid={invalidInitValue}
                   setIsCounterReady={setIsCounterReady}></Input>

            <Button title={'set'} onClick={setCounterReady} disabled={isCounterReady || invalidInitValue}></Button>
            {/*number === maxNumber ||*/}
            <hr/>

            <h1 className={invalidInitValue ? styles.red : ''}>
                {/*{invalidInitValue ? 'Incorrect value' : number}*/}
                {counterValue}
            </h1>

            <Button title={'inc'} onClick={increaseHandler} disabled={number === maxNumber || !isCounterReady}></Button>

            <Button title={'reset'} onClick={resetHanler} disabled={number === initNumber || !isCounterReady}></Button>

        </div>
    );
};