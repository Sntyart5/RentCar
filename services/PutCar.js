export async function PutCar(id, platenumber, brand, state, dailyvalue) {
  try {
    let response = await fetch(`https://api-rent-hskrcyfkt-sntyart5s-projects.vercel.app/Actualizar/Car/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        platenumber,
        brand,
        state,
        dailyvalue
      }),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    let data = await response.text();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error al actualizar el vehículo:", error);
    throw error;
  }
}