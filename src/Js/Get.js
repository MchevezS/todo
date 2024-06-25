const obtenerDatos = async ()=> {
    try {
        const response = await fetch("http://localhost:3000/api/task",{

            method:"GET",
            headers:{
                 "content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(tarea)
        })
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
}
export {obtenerDatos}