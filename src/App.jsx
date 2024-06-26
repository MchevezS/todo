import { useEffect, useState } from 'react'
import './App.css'
import {guardarDatos } from './Js/Post'
import {obtenerDatos} from './Js/Get'
import ListaDeTarea from './Componentes/ListaDeTareas'
import ListadoTareas from './Componentes/ListadoTarea'


function App() {
  const [tituloTarea,setTituloTarea]=useState("")
  const [listaTareas,setListaTareas]=useState(false)
  const [data,setData]= useState([])
  useEffect(()=>{
      const traerDatos=async()=>{
          const datos = await obtenerDatos();
          setData(datos)
          }
          traerDatos()
  },[data])
  const agregarTarea = async(e)=>{
    try {
      e.preventDefault()
      let tarea = {
        titulo:tituloTarea
      }
      await guardarDatos(tarea)
      setListaTareas(!listaTareas);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
      <>
        <h1> Lista Tareas</h1>
        <input type='text' placeholder='ingrese su tarea' onChange={(e)=> setTituloTarea(e.target.value)}></input>
        <button onClick={agregarTarea}>Agregar Tarea</button>
        <ListadoTareas lista={data}/>
      </>
  )
}
export default App
