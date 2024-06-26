const cambiarDatos = async (tarea)=> {
    try {

        tarea.state = !tarea.state;

        const respuesta = await fetch (`http://localhost:3000/api/task/${tarea}`, {
            method: "PUT",
            headers:{
                "content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(tarea)
        
        })
        let datosP = await respuesta.json()
        console.log(datosP);

    } catch (error) {
        console.log(error);
    }
}
export {cambiarDatos}