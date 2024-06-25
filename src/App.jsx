import { useEffect, useRef, useState } from 'react'
import './App.css'
import { PostGuarda } from './Js/Post'
import {obtenerDatos} from './Js/Get'
import ListadoTareas from './Componentes/ListadoTarea'
import ListaDeTarea from './Componentes/ListaDeTareas'


function App() {
  const [tituloTarea, setTituloTarea] = useState("")
   const [data, setData]= useState([])
  useEffect(()=>{
    const traeDatos = async() =>{
      const datos = await obtenerDatos();
      setData(datos)
    }
    traeDatos()
  },[data])

  const agregarTarea = async() =>{
    try {
      console.log('Esta entrando a agregar tarea');
      let tarea = {
        titulo:tituloTarea,
        estado:false
      }
      await PostGuarda(tarea)
      
    } catch (error) {
      console.log(error);
    }
  }

  // const validar = () => {
  //   const inputTarea = inputRef.current.value;
  //   let validarInput = true;
  //   if (inputTarea.trim() === "") {
  //     validar = false; 
      
  //   }
  //   return validar;
  // }


  const inputTarea= useRef('')
  const validarVacio = (e) =>{
      e.preventDefault()              
      console.log('ingresa a Validar Vacio');
        if (!inputTarea.current.value) {
                alert("INPUT VACIO")
                return
        }else{
          console.log('mandande a agregar tarea desde validar vacio');
          agregarTarea()
          
        }
    }

    // const [tareas, setTareas] = useState([...  ]) // Agrega tu lista de tareas aquí

    // const eliminarTarea = (id) => {
    //     // Lógica para eliminar la tarea con el id proporcionado//
    // }
   
    //   const nuevasTareas = tareas.filter(tarea => tarea.id !== id);
    //   // Actualizar el estado de tareas con la nueva lista filtrada
    //   setTareas(nuevasTareas);
  

  return (
    <>
    <h1> Lista de tareas </h1>
    
    <input placeholder="Inserte sus tareas" type="text" ref={inputTarea} onChange={(e)=>setTituloTarea(e.target.value)}/>
    <button className="btnAgregarTarea" onClick={validarVacio}> Agregar tarea </button>
     <ListadoTareas lista={data}/> 
    {/* <ListadoTareas lista={tareas} eliminarTarea={eliminarTarea} />      */}
    </>
    
  )
}

export default App
