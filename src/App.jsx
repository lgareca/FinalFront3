import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import { Route, Routes } from 'react-router-dom'
import Home from "./Routes/Home"
import Favs from "./Routes/Favs"
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import { routes } from "./Components/utils/routes"
import { useContextGlobal } from "./Components/utils/GlobalContext"

function App() {
  const {state} = useContextGlobal()
  return (
      <div className={`App ${state.theme}`} >
          <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.detail} element={<Detail/>}/>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={routes.favs} element={<Favs/>}/> 
          </Routes>
          
          <Footer/>
          
      </div>
  );
}

export default App;
