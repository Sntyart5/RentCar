export async function GetCars() {
  try {
    let response = await fetch("https://api-rent-hskrcyfkt-sntyart5s-projects.vercel.app/obtener/Cars", {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    });

    let data = await response.json();
    console.log(data.datos);
    return data.datos;
  } catch (error) {
    console.error("Error al obtener los vehículos:", error);
    throw error;
  }
}
