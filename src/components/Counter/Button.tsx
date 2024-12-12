// @flow
import * as React from 'react';

type Props = {
    title: string
    onClick: () => void
    disabled: boolean
};

export const Button = (props: Props) => {

    const onClickHandler = () => {
        props.onClick()
    }

    return (
        <button disabled={props.disabled} onClick={onClickHandler}>
            {props.title}
        </button>
    );
};