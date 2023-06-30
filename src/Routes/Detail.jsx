import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/GlobalContext'
import { useEffect } from 'react'
const {state,dispatch} = useContextGlobal
import axios from 'axios'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  
  const {state,dispatch} = useContextGlobal()

  const params = useParams()

  const url = 'https://jsonplaceholder.typicode.com/users/'+ params.id

  useEffect(() => {
    axios(url)
    .then(res => {
      dispatch({type: 'GET_ODONTOLOGO', payload: res.data})})
  },[])


  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
    <div>
      <h1>Detail Dentist {state.odontologo.id} </h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>WebSite</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td>{state.odontologo.name}</td>
              <td>{state.odontologo.email}</td>
              <td>{state.odontologo.phone}</td>
              <td>{state.odontologo.website}</td>
            </tr>
            
          </tbody>
      </table>
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail