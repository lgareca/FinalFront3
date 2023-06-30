import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { useContextGlobal } from '../Components/utils/GlobalContext'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {
  // const [dentista,setDendista] = useState('')
  const {state} = useContextGlobal()
  

  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.data.map(dentista => <Card key={dentista.id} dentista={dentista}/>)}
      </div>
    </main>
  )
}

export default Home