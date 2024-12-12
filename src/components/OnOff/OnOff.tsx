import * as React from 'react';

type Props = {
    onOff: boolean
    setOnOff: (result: boolean) => void
};

export const OnOff = (props: Props) => {

    const onStyle = {
        width: "20px",
        height: "20px",
        border: '1px solid black',
        display: 'inline-block',

        padding: '5px',

        backgroundColor: props.onOff ? 'green' : 'white'
    }
    const offStyle = {
        width: "20px",
        height: "20px",
        border: '1px solid black',
        display: 'inline-block',

        padding: '5px',
        marginLeft: '5px',

        backgroundColor: props.onOff ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "10px",
        border: '1px solid black',
        display: 'inline-block',

        marginLeft: '5px',

        backgroundColor: props.onOff ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {props.setOnOff(true)}}>On</div>
            <div style={offStyle} onClick={() => {props.setOnOff(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};