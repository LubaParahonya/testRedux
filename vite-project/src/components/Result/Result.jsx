import React from 'react'
import { Link } from 'react-router-dom'
import style from './Result.module.css'

const Result = (props) => {
  return (
    <div className={style.boxResult}>
        <h2>Правильные ответы</h2>
        <h3>Количество: {props.result}</h3>
        <button className={style.buttonResult} onClick={props.restart}><Link to='/' style={{textDecoration:'none', color: "black"}}>Пройти заново</Link></button>
      
    </div>
  )
}

export default Result
