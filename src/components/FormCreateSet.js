// import './FormCreateCard'
import './FormCreateSet.css'
// import { Link } from 'react-router-dom'
// import { React } from "react"
import { useState } from 'react'
// import './PageCreateSet'
import {useEffect} from "react";
// import { useForm } from 'react-hook-form'
// import { setName } from 'react-hook-form'

import './FormCreateSet.css' 
import './UseInput'
import React from 'react';
import { useForm } from 'react-hook-form'

export function FormCreateSet() { 
        const [count, setCount] = useState(0);
        useEffect(() => {
            if (count !== 0) {
                console.log(`Отправка формы: ${count}`)
                alert(`Отправка формы: ${count}`)
            }
        }, [count], );

            


    const { register, handleSubmit, formState : {errors} } = useForm({
        defaultValues: {
            name: "",
            discription: ""
        }
    });
    console.log(errors);

    return( 
        <div className='div__form'>
            <form onSubmit={handleSubmit((data) => {
                setCount(count + 1);
                console.log(data);
            })}>
                <div className='form'>
                    <label htmlFor='name'className='label__title'>
                        Название набора:
                    </label>
                    <input type="text" name="name" id='name' {...register("name", 
                    {
                         required: "Заполните поле название набора",
                         minLength: {
                         value: 4,
                         message: "Название набора должно содержать минимум 4 символа"
                        }
                    })}/>
                    <p className={"errorMsg"}>{errors.name?.message}</p>
                </div>

                <div className='form'>
                    <label htmlFor='discription' className='label__title'>
                        Описание:
                    </label>
                    <textarea  name="discription" id='discription' {...register("discription", 
                    {
                        required: "Заполните поле Описание набора",
                        minLength: {
                            value: 4,
                            message: "Описание набора должно содержать минимум 4 символа"
                           }

                    })}/>
                    <p className={"errorMsg"}>{errors.discription?.message}</p>
                </div>

                <div className='form'>
                    <input className="btn__create btn" type="submit" value="Создать сет"/>
                </div>
            </form>
        </div>
    ); 
}
