import React from "react";
import { Card } from "./Card"
import { useState } from "react";
import cards from "../data.json"
import { useLocation, useParams } from "react-router-dom";


export function Set() {
    const location = useLocation()
    const { set } = location.state;
    const param = useParams();
    console.log(param.id)
    
    const [step, setStep] = React.useState(0);

    const cards = require('../data').filter((item) => (item.setName === set));
    return (
        <div>
            <h2>Название набора</h2>
            <Card front={cards[step].front} back={cards[step].back} />
            <div className="control">элементы управления</div>
            <div className="btns">
                <button disabled={step === 0} className="btn-1 btn" onClick={() => {
                    if (step === 0) return
                    setStep(step - 1)
                }}>left</button>

                <div className="counter">
                    {step + 1}/ {cards.length } 
                </div>

                <button disabled={step === cards.length - 1} className="btn-2 btn" onClick={() => {
                    if (step === cards.length - 1) return

                    setStep(step + 1)
                }}>right</button>

            </div>
        </div>
    );
}


