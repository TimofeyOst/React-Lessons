import * as React from 'react';
import {useState} from "react";

type Props = {

};

export const UnControlledRating = () => {
    let [rating, setRating] = useState(0)

    return (
        <div>
            <Star selected={rating > 0} setRating={() => setRating(1)} ></Star>
            <Star selected={rating > 1} setRating={() => setRating(2)} ></Star>
            <Star selected={rating > 2} setRating={() => setRating(3)} ></Star>
            <Star selected={rating > 3} setRating={() => setRating(4)} ></Star>
            <Star selected={rating > 4} setRating={() => setRating(5)} ></Star>
        </div>
    );
};

type StarPropsType = {
    selected: boolean
    setRating: () => void
}

const Star = (props: StarPropsType) => {

    return <span onClick={props.setRating}> { props.selected ? <b> star </b> : 'star'} </span>;

    // <span><b> star </b></span> : <span onClick={(event) => {setBold(true)}}> star</span>;
}

// <button onClick={() => {
//     setRating(1)
// }}>1
// </button>
// <button onClick={() => {
//     setRating(2)
// }}>2
// </button>
// <button onClick={() => {
//     setRating(3)
// }}>3
// </button>
// <button onClick={() => {
//     setRating(4)
// }}>4
// </button>
// <button onClick={() => {
//     setRating(5)
// }}>5
// </button>