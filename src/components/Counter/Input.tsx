import * as React from 'react';
import {ChangeEvent} from "react";
import styles from './counter.module.css'

type Props = {
    title: number,
    setTitle: (title: number) => void
    invalid: boolean
    setIsCounterReady: (value: boolean) => void
};

export const Input = (props: Props) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setIsCounterReady(false)
        props.setTitle(+event.currentTarget.value)
    }

    return (
        <input type={"number"} value={props.title} onChange={onChangeInputHandler} className={props.invalid ? styles.bgRed : ''}/>
    );
};