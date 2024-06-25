import { obtenerDatos } from "../Js/Get.js";
import { PostGuarda } from "../Js/Post.js";



const ListaDeTarea = ({tareas}) =>{ //tareas es un parametro de esta funcion
    return(
        <>
            {tareas.map((tareasPorHcaer,index)=>(
                <Tareas
                    key={index}
                    titulo={tareasPorHcaer.titulo}
                />
            ))}
        </>
    )
}
export default ListaDeTarea