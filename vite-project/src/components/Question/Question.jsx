import React from 'react'
import { Link } from 'react-router-dom'
import style from './Question.module.css'
import { useSelector } from 'react-redux'



const Question = (props) => {
  const listCur = useSelector(state => state.current)
  const next =  String(parseInt(props.path.slice(1)) + 1)
  const page =  props.path.slice(1)
  let newStr = props.path.replace(page, next);
  
  return (
            <div className={style.boxmain}>
          <div className={style.questionNumber}>{props.questionNumber}</div>
          <h3>{props.question}</h3>
          <div className={style.boxInput}>
          <div>
            <input type='radio' id='q1' name='q1' value={props.value1} onClick={(e)=> props.getAnswer(e)}  className={style.radioInpyt}></input>
            <label htmlFor='q1'>{props.var1}</label>
          </div>
          <div>
            <input type='radio' id='q2' name='q1' value={props.value2} onClick={(e)=> props.getAnswer(e)} className={style.radioInpyt}></input>
            <label htmlFor='q2'>{props.var2}</label>
          </div>
          <div>
            <input type='radio' id='q3' name='q1' value={props.value3} onClick={(e)=> props.getAnswer(e)} className={style.radioInpyt}></input>
            <label htmlFor='q3'>{props.var3}</label>
          </div>
          </div>
          <button onClick={props.nextAnswer} className={style.buttonNext}>
            <Link to={parseInt(page) < listCur.length? newStr : '/result'}
            style={{textDecoration:'none', color: "black"}}>{parseInt(page) < listCur.length?
           'Следующий вопрос': 'Проверить результат'}</Link></button>
          <div>{props.count}</div>
        </div>

  )
}

export default Question
