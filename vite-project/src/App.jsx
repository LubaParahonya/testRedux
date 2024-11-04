import './App.css'
import Start from './components/Start/Start'
import Question from './components/Question/Question'
import Result from './components/Result/Result'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_LIST_CARD } from './store/actions'

function App() {
  const listC = useSelector((state) => state.current)
  const dispatch = useDispatch();
  let [answer, setAnswer] = useState(0)
  let [flag, setFlag] = useState(0)
  let [result, setResult] = useState(0)
 
  const getApiData = async () =>{
    try{
        const response = await fetch('https://lubaparahonya.github.io/dateTestJson/data.json')
        .then(response => response.json());
        dispatch({
          type: UPDATE_LIST_CARD,
          payload: response
        }) 
    }catch(error){
      console.log(error);
    }
}

useEffect(()=> {
  getApiData();
}, []);

  const restart = () =>{
    setAnswer(0)
    setFlag(0)
    setResult(0)
    console.log('запустили getResult'  )
  }

  const nextAnswer = () => {
    setAnswer(0)
    setFlag(0)
    setResult(result + answer)
    console.log('сработало nextAnswer' ,  flag)
    
  }

  const getAnswer = (e)=> {
    e.target.checked = true
    if(e.target.value === "true"){
      if(flag === 0){
        setAnswer(answer + 1)
        setFlag(flag + 1)
      }else{
        setAnswer(answer)
}     
    }
    else{
      if(flag !== 0){
        setAnswer(answer - 1)
        setFlag(flag - 1)
      }else{
        setAnswer(answer)
      }
    }
  }

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Start />} />
    <Route path='/result' element={<Result restart={restart} result={result}/>} /> 
      {listC? listC.map(el=>
    <Route key={el.path} path={el.path} 
      element={<Question 
      questionNumber={el.questionNumber}
      question={el.question}
      value1={el.value1}
      var1={el.var1}
      value2={el.value2}
      var2={el.var2}
      value3={el.value3}
      var3={el.var3}
      path={el.path}
      nextAnswer={nextAnswer}
      getAnswer={getAnswer}
      restart={restart}
      flag={flag}
      />} 
      />): null}
    </Routes>
    <Routes>
      
    </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
