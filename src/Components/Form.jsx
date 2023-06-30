import React from "react";
import { useContextGlobal } from "./utils/GlobalContext";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const {usuario,setUsuario,mostrar,setMostrar,err,setErr} = useContextGlobal()
  
  const validarMail = (email) => {
    return /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email);
  };

  const handleSubmit = (event) =>{

    event.preventDefault()
    if (usuario.nombre.trim().length <= 5 || !validarMail(usuario.email)) {
      
      setErr(true)
      
    }else{
      setMostrar(true)
      setErr(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input type="text" disabled={mostrar} placeholder="Ingrese su nombre" onChange={(e)=> setUsuario({...usuario,nombre:e.target.value})}/>
          <input type="text"  disabled={mostrar} placeholder="Ingrese su Email" onChange={(e)=> setUsuario({...usuario,email:e.target.value})}/>
          {mostrar && "Gracias, " + usuario.nombre + " te contactaremos pronto"}
          {err && "Verifique sus datos , alguno debe tener un error"}
          <button>Enviar</button>

        
      </form>
    </div>
  );
};

export default Form;
