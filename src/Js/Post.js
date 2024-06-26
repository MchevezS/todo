const guardarDatos = async (tarea) => {
    try {
        const respuesta = await fetch ("http://localhost:3000/api/task",{
            method: "POST",
            headers:{
                "content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(tarea)
        })
        let datos = await respuesta.json()
        console.log(datos);

    } catch (error) {
        console.log(error);
    }
}
export {guardarDatos}