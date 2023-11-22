export async function GetUsers(){
    let headersList = {

    }
    let response = await fetch("https://api-rent.vercel.app/obtener/Users", { 
      method: "GET",
      headers: headersList
    });
    
    let data = await response.json();
    return(data.datos)
}