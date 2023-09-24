import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from '../src/Pages/Home/Home'
import Profile from '../src/Pages/Profile/Profile'
import Courses from '../src/Pages/Courses/Courses'
import Game from '../src/Pages/Game/Game'
import Login from './Pages/Login/Login';
import Rotaciones from './Pages/Rotaciones/Rotaciones';
import NavbarComp from './Components/NavbarComp';
import { useSelector } from 'react-redux';
import Data from './Pages/Data/Data';
import DataCreate from './Pages/Data/DataCreate';
import DataEdit from './Pages/Data/DataEdit';
import DataVisualize from './Pages/Data/DataVisualize';
import CursoCreate from './Pages/Data/CursoCreate';
//import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const {isAuth} = useSelector((state) => state.auth)
  //const {isAdmin} =  useSelector((state) => state.auth)
  const {isAdmin} = useSelector((state) => state.auth)
  return (
    <>
      <NavbarComp/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element = {isAuth && !isAdmin ? <Profile/> : <Login/>}/>
        <Route path='/courses' element={isAuth && !isAdmin ? <Courses/> : <Login/>}/>
        <Route path='/rotaciones' element={isAuth && !isAdmin ? <Rotaciones/> : <Login/>}/>
        <Route path='/game' element={isAuth && !isAdmin ? <Game/> : <Login/>}/>
        <Route path='/rotaciones' element={isAuth && !isAdmin ? <Rotaciones/> : <Login/>}/>
        <Route path='/login' element={!isAuth ? <Login/> : <Home/>}/>
        <Route path='/data' element={isAuth && isAdmin ? <Data/> : <Home/>}/>
        <Route path='/data/create/usuario' element={isAuth && isAdmin ? <DataCreate/> : <Home/>}/>
        <Route path='/data/create/curso' element={isAuth && isAdmin ? <CursoCreate/> : <Home/>}/>
        <Route path='/data/edit/:idempleadoinfo' element={isAuth && isAdmin ? <DataEdit/> : <Home/>}/>
        <Route path='/data/getRotaciones/:idempleadoinfo' element={isAuth && isAdmin ? <DataVisualize/> : <Home/>}/>
      </Routes>
    </>
  );
}

export default App;
