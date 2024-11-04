import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
 import rootReducer from './store/index.js'


const store = createStore(rootReducer)
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
