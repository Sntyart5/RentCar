export async function DeleteCar(id) {
  try {
    let response = await fetch(`https://api-rent-hskrcyfkt-sntyart5s-projects.vercel.app/eliminar/Car/${id}`, {
      method: "DELETE",
      headers: {
        "Accept": "*/*",
        "Content-Type": "application/json"
      }
    });

    let data = await response.text();
    return data;
  } catch (error) {
    console.error("Error al eliminar el vehículo:", error);
    throw error;
  }
}