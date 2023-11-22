import {Text,Button,TextInput} from "react-native-paper"
import { View,Image,FlatList } from "react-native";
import {Controller,useForm}from "react-hook-form"
import { styles } from "../styles/styles";
import { useState } from "react";
import { GetCars } from "../services/GetCars";
import { useEffect } from "react";
export function ListCarsRent({navigation}){
const [data,setdata]=useState("")
    function handleBack(){
        navigation.navigate("Rent")
    }
async function fetchdata(){
    try {
        let datos=await GetCars()
        let filtro=datos.filter(({platenumber,brand,state,dailyvalue})=>{return state==1})
        setdata(filtro)
    }catch(error){
console.log(error)
    }
}
useEffect(()=>{
    fetchdata()
},[])
    return(
        <View style={styles.container}>
              <Image 
  style={
    {
      height:150,
      width:150
    }
  }
  source={{
    uri:"https://firebasestorage.googleapis.com/v0/b/rentacar-352a0.appspot.com/o/logo-removebg-preview.png?alt=media&token=acf8c954-9540-4d79-b405-8d59533b23cd"
  }}>
  </Image>
     <FlatList
        data={data}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.carroItem}>
            <Text style={{color:"white"}}>{`Placa: ${item.platenumber}`}</Text>
            <Text style={{color:"white"}}>{`Marca: ${item.brand}`}</Text>
            <Text style={{color:"white"}}>{`Estado: ${item.state}`}</Text>
            <Text style={{color:"white"}}>{`valor diario: ${item.dailyvalue}`}</Text>
            <Text style={{color:"white"}}>{`id: ${item._id}`}</Text>
          </View>
          
        )}
      />
                 <Button
                label="Back"
                style={{    backgroundColor:"pink",
                width:"fitcontent",
                color:"white",
                marginTop:"20px",
                marginLeft:"5px",
                marginRight:"5px",
            marginBottom:"20px"}}
                onPress={handleBack}
              >Back</Button>
        </View>
    )
}