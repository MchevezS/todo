import { eliminarTarea } from "../Js/Delete"
import ListaDeTarea from "./ListaDeTareas"

const ListadoTareas = ({lista})=>{
    return(
        <>
            {lista && lista.map((tarea) => (
                <div key={tarea.id}>
                    <input type="checkbox"/>
                    <p>{tarea.titulo}</p>
//                     <button onClick={() => eliminarTarea(tarea.id)}>Eliminar tarea</button>
                </div>
            ))}
        </>
    )
}

export default ListadoTareas;
// import React from 'react';

// const ListadoTareas = ({ lista }) => {
//     return (
//         <>
//             {lista && lista.map((tarea) => (
//                 <div key={tarea.id}>
//                     <input type="checkbox" />
//                     <p>{tarea.titulo}</p>
//                     <button onClick={() => eliminarTarea(tarea.id)}>Eliminar tarea</button>
//                 </div>
//             ))}
//         </>
//     );
// }

// export default ListadoTareas;