 import React from "react";
 import {Header} from './Header';
 import { BtnSet } from "./BtnSet";
import { Link } from "react-router-dom";

 export function PageSelectSet() {
    const cards = require("../data"); //джейсон 
    const sets = cards.reduce(
        (acc, item) => {
            if (acc.map[item.setName])
                return acc;
            acc.map[item.setName] = true;
            acc.sets.push(item.setName);
            return acc;
        },
        {
            map: {},
            sets: [],
        }
    ).sets.map((item,index)=>( //перебор названий
    <BtnSet key={index} name={item} id={item}/> //создание кнопок 
    ));

    return(
    <div>
        <Header />
        <h2>Выбор сетов</h2>
        <ul className="set-list">
            {sets} 
            
        </ul> 
    </div>
    )
}