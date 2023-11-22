import {Text,Button,TextInput} from "react-native-paper"
import { View,Image,FlatList } from "react-native";
import {Controller,useForm}from "react-hook-form"
import { styles } from "../styles/styles";
import { useState } from "react";
import { GetCars } from "../services/GetCars";
import { useEffect } from "react";
import { DeleteCar } from "../services/DeleteCar";

export function Delete({navigation}){
    const[color,setColor]=useState("")
    const[text,setText]=useState("")

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        defaultValues: {
          id:"",
        
        },
      });
    function handleBack(){
navigation.navigate("CreateCar")
    }
    async function handledelete(data){
        var referenceid=data.id
        try{
            await DeleteCar(referenceid)
            setColor("green")
            setText("eliminado exitosamente")
        }
catch(error){
console.log(error)
setColor("red")
setText("error al eliminar")
}

    }
    return(
<View style={styles.container} >
  <Image 
  style={
    {
      borderRadius:"50%",
      height:150,
      width:150
    }
  }
  source={{
    uri:"https://firebasestorage.googleapis.com/v0/b/rentacar-352a0.appspot.com/o/user.png?alt=media&token=e74a5c8c-487a-4cbc-bd68-3d110a76c252"
  }}>
    
  </Image>
<Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            autoFocus
            label="id"
            right={<TextInput.Icon icon="user" />}
            onChangeText={onChange}
            value={value}
          ></TextInput>
        )}
        name="id"
      ></Controller>
 {errors.id?.type == "required" && (
        <Text style={{ color: "red" }}>Debes ingresar el id</Text>
      )}
 <Text style={{color:`${color}`,fontSize:"10px"}}>{text}</Text>
      <View style={styles.containerButtons}>
         <Button
          label="Back"
          style={styles.button}
          onPress={handleBack}
        >Back</Button>
      </View>

      <Button
          label="Delete"
          style={styles.button}
          onPress={handleSubmit(handledelete)}
        >Delete</Button>

</View>



    )
}