import { eliminarTarea } from "../Js/Delete";
import { cambiarDatos } from "../Js/Put";
import ListaDeTarea from "./ListaDeTareas";
import { useEffect, useState } from "react";

const ListadoTareas = ({lista }) => {
    return(
        <>
            {lista.map((tarea) => (
                <div>
                    <input type="checkbox" onChange={cambiarDatos}/>
                    <p>{tarea.titulo}</p>
//                     <button onClick={()=>eliminarTarea(tarea.id)}>Eliminar </button>
                </div>
            ))}
        </>
    )
}

export default ListadoTareas;
