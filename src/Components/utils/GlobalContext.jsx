import { createContext, useContext,useEffect,useReducer,useState } from "react";
import axios from 'axios'

const ContextGlobal = createContext();

const initialStateData = {
  data : [] , 
  odontologo: {},
  favs: JSON.parse(localStorage.getItem('favs')) || [],
  theme: "light"
}


// const initialState = {theme: "", data: []}


const reducer = (state,action) => {
    switch (action.type) {
      case 'GET_LIST' : 
        return {...state,data: action.payload}
      case 'GET_ODONTOLOGO' :
        return {...state,odontologo: action.payload}
      case 'LIKE':
        return {...state,favs: [...state.favs, action.payload]}
      case 'DISLIKE':
        return {...state,favs: state.favs.filter(fav => fav.id !== action.payload.id)}
      case 'dark':
        return {...state,theme: action.payload}
      default :
      throw new Error()
    }
}


const GlobalContext = ({children}) => {
  
  const [state,dispatch] = useReducer(reducer,initialStateData)
  const [usuario,setUsuario] =  useState({
    nombre: '',
    email: ''
  })

  const [mostrar,setMostrar] = useState(false)
  const [err,setErr] = useState(false)

  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(()=>{
    axios(url)
    .then(res => dispatch({type: 'GET_LIST', payload: res.data}))
  },[])

  useEffect(()=>{
    localStorage.setItem('favs', JSON.stringify(state.favs))
  },[state.favs])

  return (
    <ContextGlobal.Provider value={{
      state,dispatch,
      usuario,setUsuario,
      mostrar,setMostrar,
      err,setErr
    }}>
      {children}
    </ContextGlobal.Provider>
  )
}

export default GlobalContext

export const useContextGlobal = () => useContext(ContextGlobal)
