

const Tareas =({titulo, completadas, eliminar}) =>{
    return(
        <>
          <div className= "contenedor-input">
            <form className="inpBtn">
               <input placeholder="Inserte sus tareas" type="text"></input>
               <button className="btnAgregarTarea" onClick={guardarTarea}> Agregar tarea </button>
            </form>
            <div>
                {/* aqui voy hacer el contador */}
            </div>
          </div>

        </>
    )
}
export {Tareas}