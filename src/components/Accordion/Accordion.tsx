import React from 'react';


type Props = {
    titleValue: string
    // onClick: (setCollapse: boolean) => void
    onClick: () => void
    isCollapsed: boolean
};

export const Accordion = (props: Props) => {

    return (
        <div>

            {/*<AccordionTitle title={props.titleValue} onClick={() => props.onClick(!props.isCollapsed)} ></AccordionTitle>*/}
            <AccordionTitle title={props.titleValue} onClick={props.onClick} ></AccordionTitle>

            {!props.isCollapsed && <AccordionBody></AccordionBody>}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
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
