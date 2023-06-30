import React from 'react'
import { Link } from 'react-router-dom'
import {routes} from './utils/routes'
import { useContextGlobal } from './utils/GlobalContext'
import { BsFillMoonFill } from "react-icons/bs"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state,dispatch} = useContextGlobal()

  const cambiarTema = () =>{

    if(state.theme == 'light'){
      dispatch({type:'dark', payload: 'dark'})
      // {type: 'LIKE', payload: dentista}
    }else{
      dispatch({type:'dark', payload: 'light'})
    }
  }

  return (
    <nav className="navbar">
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div className="navbar-left">
        <img src="../../public/images/DH.png" alt="" style={{width: '300px'}}/>
      </div>
      <div className="navbar-right">
      <Link to={routes.home}><h4>Home</h4></Link>
      <Link to={routes.contact}><h4>Contacto</h4></Link>
      <Link to={routes.favs}><h4>Favorito</h4></Link>
      <button onClick={cambiarTema}><BsFillMoonFill/></button>
      </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
    </nav>
  )
}

export default Navbar