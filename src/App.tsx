import React, {useState} from 'react';
import './App.css';
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UnControlledAccordion} from "./components/UncontrolledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {Counter} from "./components/Counter/Counter";


function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(1)
    const [isCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [onOffValue, setonOffValue] = useState<boolean>(false)


    return (
        <div className="App">
            <Counter></Counter>

            {/*<OnOff onOff={onOffValue} setOnOff={setonOffValue}></OnOff>*/}

            {/*<Accordion titleValue={'Accordion'} onClick={() => setAccordionCollapsed(!isCollapsed)} isCollapsed={isCollapsed}></Accordion>*/}


            {/*<Rating value={ratingValue} onClick={setRatingValue}></Rating>*/}


            {/*<UnControlledRating></UnControlledRating>*/}


            {/*<UnControlledAccordion titleValue={'UncontrolledAccordion'}></UnControlledAccordion>*/}


            {/*<UncontrolledOnOff onChange={setonOffValue}></UncontrolledOnOff>*/}
            {/*{onOffValue.toString()}*/}


        </div>
    );
}

export default App;
