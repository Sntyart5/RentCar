export async function PostCar(platenumber, brand, state, dailyvalue) {
  try {
    let response = await fetch("https://api-rent-hskrcyfkt-sntyart5s-projects.vercel.app/mandar/Car", {
      method: "POST",
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
    console.log("PostCar Response:", data);  // <-- Agrega este log

    return data;
  } catch (error) {
    console.error("Error en PostCar:", error);
    throw error;
  }
}
