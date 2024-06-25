const eliminarTarea = async (id) => {
    try {
        fetch(`http://localhost:3000/api/task/${id}`,{
            method: "DELETE",
        })

    } catch (error) {
        console.log(error);
    }
}
export {eliminarTarea}