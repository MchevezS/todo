import { useState } from 'react'
import './App.css'
import { obtenerDatos } from './Js/Get'
import { PostGuarda } from './Js/Post'
import  Titulo  from './Componentes/Titulo'
import  listaDeTarea  from './Componentes/listaDeTarea'
import { eliminarTarea } from './Js/Delete'
import { Tareas } from './Componentes/Tareas'


function App() {
  const [tituloTarea, setTituloTarea] = useState("")

  const agregarTarea = async(e) =>{
    try {
      e.preventDefault()
      let tarea = {
        titulo:tituloTarea
      }
      await PostGuarda(tarea)

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <h1> Lista de tareas </h1>
    <input type='text' placeholder='Ingrese sus tareas' onChange={(e)=> setTituloTarea(e.target.value)}></input>
    <button onClick={agregarTarea}>Agregar tareas </button>
    </>
  )
}

export default App
