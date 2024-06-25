import { eliminarTarea } from "../Js/Delete"
import ListaDeTarea from "./ListaDeTareas"

const ListadoTareas = ({lista})=>{
    return(
        <>
            {lista.map((tarea)=>(
                <div>
                    <input type="checkbox"/>
                    <p>{tarea.titulo}</p>
                    <button onClick={()=>eliminarTarea(tarea.id)}>Eliminar tarea</button>
                </div>
            ))}
        </>
    )
}

export default ListadoTareas