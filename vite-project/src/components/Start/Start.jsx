import React from 'react'
import {Link } from 'react-router-dom';
import style from './Start.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { FILTER_GIT } from '../../store/actions';

const Start = () => {
  const dispatch = useDispatch()
  const list = useSelector((state) => state.test)
  const handelfilter = (type, list) =>{
    dispatch({
        type: FILTER_GIT,
        payload: {
          listCur: list,
          typeCur: type
        }
    })
}

  return (
    <div className={style.boxmain}>
      <img className={style.image} src="http://anmaiden.ru/wp-content/uploads/2023/12/загрузка.png" alt="logo" />
      <h2>FRONTEND РАЗРАБОТЧИК: ТЕСТ ДЛЯ НОВИЧКА</h2>
      <button className={style.buttonStart} onClick={() => handelfilter("js", list)}>
        <Link to='/1' style={{textDecoration:'none', color: "black"}}>JAVASCRIPT</Link>
      </button>
      <button className={style.buttonStart} 
      onClick={() => handelfilter("git", list)}>                                                    
        <Link to='/1' style={{textDecoration:'none', color: "black"}}>GIT</Link>
        </button>
    </div>
  )
}

export default Start
