import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/GlobalContext";
import { FaHeart } from 'react-icons/fa'

const Card = ({dentista}) => {
  
  const {state,dispatch} = useContextGlobal()

  const [icono,setIcono] = useState(false);

  useEffect(() => {
    // Obtener el estado del botón del localStorage al cargar la página
    const storedIcono = localStorage.getItem(`icono_${dentista.id}`);
    if (storedIcono) {
      setIcono(JSON.parse(storedIcono));
    }
  }, [dentista.id]);

  const addFav = ()=>{

    // Aqui iria la logica para agregar la Card en el localStorage
    if(!state.favs.includes(dentista)){
      dispatch({type: 'LIKE', payload: dentista})
      setIcono(!icono)
      localStorage.setItem(`icono_${dentista.id}`, JSON.stringify(!icono));
    }else{
      
      dispatch({type: 'DISLIKE',payload:dentista})
      localStorage.removeItem(`icono_${dentista.id}`);
      setIcono(!icono)

    }
  
  }
  

  return (
    <div className={`card ${state.theme}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link key={dentista.id} to={'detalle/' + dentista.id}>
        <img className="image-card" src="../../images/doctor.jpg" alt="imagen doctores" />
        <h3>{dentista.name}</h3>
        <p>{dentista.username}</p>
        
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      
        </Link>
        
        <button onClick={addFav} className="favButton">  
        {icono ? (
          <FaHeart className="icono-favorito activo" />
        ) : (
          <FaHeart className="icono-favorito" />
        )}
          
        </button>


    </div>
  );
};

export default Card;
