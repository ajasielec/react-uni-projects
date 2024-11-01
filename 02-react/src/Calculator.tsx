import * as React from "react";
import {Button} from "./Button.tsx";
import './Calculator.css'
import {useRef} from "react";

export const Calculator: React.FC = () => {
    const displayRef = useRef<HTMLInputElement>(null);

    // on click functions
    const clearDisplay = () => {
        if (displayRef.current){
            displayRef.current.value = "";
        }
    };

    const clearOne = () => {
        if (displayRef.current){
            displayRef.current.value = displayRef.current.value.slice(0, -1);
        }
    };

    const appendToDisplay = (input: string) => {
        if (displayRef.current){
            displayRef.current.value += input;
        }
    };

    const calculate = () => {
        if (displayRef.current){
            try{
                displayRef.current.value = eval(displayRef.current.value);
            } catch (error){
                console.error(error);
                displayRef.current.value = "Error";
            }
        }
    };

    return (
        <div className="calculator">
            <input id="display" ref={displayRef} readOnly/>
            <div className="buttons">
                <Button label="C" onClick = {clearDisplay} className="operator-btn" />
                <Button label="⌫" onClick = {clearOne} className="operator-btn" />
                <Button label="%" onClick={()=> appendToDisplay('%')} className="operator-btn" />
                <Button label="/" onClick={()=> appendToDisplay('/')} className="operator-btn" />
                <Button label="7" onClick={() => appendToDisplay('7')} />
                <Button label="8" onClick={() => appendToDisplay('8')} />
                <Button label="9" onClick={() => appendToDisplay('9')} />
                <Button label="*" onClick={() => appendToDisplay('*')} className="operator-btn"/>
                <Button label="4" onClick={() => appendToDisplay('4')} />
                <Button label="5" onClick={() => appendToDisplay('5')} />
                <Button label="6" onClick={() => appendToDisplay('6')} />
                <Button label="-" onClick={() => appendToDisplay('-')} className="operator-btn"/>
                <Button label="1" onClick={() => appendToDisplay('1')} />
                <Button label="2" onClick={() => appendToDisplay('2')} />
                <Button label="3" onClick={() => appendToDisplay('3')} />
                <Button label="+" onClick={() => appendToDisplay('+')} className="operator-btn"/>
                <Button label="" id="emptyBtn" onClick={() => {}} />
                <Button label="0" onClick={() => appendToDisplay('0')} />
                <Button label="." onClick={() => appendToDisplay('.')} />
                <Button label="=" onClick={calculate} id="equal-btn" />
            </div>
        </div>
    )
}