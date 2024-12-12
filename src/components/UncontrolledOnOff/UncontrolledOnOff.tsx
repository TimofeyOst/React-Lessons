import * as React from 'react';
import {useState} from "react";

type Props = {
    on?: boolean
    onChange: (on: boolean) => void
};


export const UncontrolledOnOff = (props: Props) => {

    let [on, setOn] = useState(false)

    console.log('on:', on)

    const onStyle = {
        width: "20px",
        height: "20px",
        border: '1px solid black',
        display: 'inline-block',

        padding: '5px',

        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: "20px",
        height: "20px",
        border: '1px solid black',
        display: 'inline-block',

        padding: '5px',
        marginLeft: '5px',

        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "10px",
        border: '1px solid black',
        display: 'inline-block',

        marginLeft: '5px',

        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};