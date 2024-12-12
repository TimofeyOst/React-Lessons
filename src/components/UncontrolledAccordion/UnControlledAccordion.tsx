import * as React from 'react';
import {useState} from "react";

type Props = {
    titleValue: string
};

export const UnControlledAccordion = (props: Props) => {

    let [collapse, setCollapse] = useState(false)

    return (
        <div>
            {/*<AccordionTitle collapse={collapse} setCollapse={setCollapse} title={props.titleValue}></AccordionTitle>*/}
            <AccordionTitle onClick={() => {setCollapse(!collapse)}} title={props.titleValue}></AccordionTitle>
            {/*<button onClick={() => {setCollapse(!collapse)}}>TOGGLE</button>*/}
            {!collapse && <AccordionBody></AccordionBody>}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string
    collapse?: boolean
    onClick: () => void
    setCollapse?: (isCollapsed: boolean) => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {


    return (
        <h3 onClick={props.onClick}>-- {props.title} --</h3>
    )
}

const AccordionBody = () => {
    return  (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}