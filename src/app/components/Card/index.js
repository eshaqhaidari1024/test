'use client';
import { useEffect, useState } from 'react';
import style from './style.module.css';
function Card({title,subtitle,link}){

    const [clickCount,setClickCount] =useState(0);

    useEffect(()=>{

        console.log(`hi, i was click ${clickCount} times`);
    },[clickCount]);

    const handleClick=()=>{

        setClickCount((currentState)=>currentState +1)
    }

   

    return (

     <p onClick={handleClick} className={style.card} >{title}-{subtitle} <a href='#'>{clickCount}</a></p>
    )
}

export default Card;