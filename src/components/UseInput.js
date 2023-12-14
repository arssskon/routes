import {useState} from 'react';
import  React  from 'react';
import './FormCreateSet'


export function useInput(initialValue) {
    const [value, setValue] = React.useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return [value, handleChange];
}