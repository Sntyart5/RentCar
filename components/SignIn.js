import {Text,Button,TextInput} from "react-native-paper"
import { View,Image } from "react-native";
import {Controller,useForm}from "react-hook-form"
import { styles } from "../styles/styles";
import { useState } from "react";
import { GetUsers } from "../services/GetUsers";
export function SignIn({navigation}){
  const[color,setColor]=useState("")
  const[text,setText]=useState("")
function HandleRegister(){
  navigation.navigate("Register")
}

  function HandlePassword(){
    navigation.navigate("ForgotPassword")
  }
  async function HandlesignIn(data){
    try{
      var apiData=await GetUsers()
    }catch(error){
      setColor("red")
      setText("error con la busqueda de usuarios"+error)
    }

var referencePassword=data.Password
var referenceUser=data.User
console.log(apiData)
var filtro=apiData.filter(({username,name,password,role,reservedword})=>{return password==referencePassword && username==referenceUser})
if (filtro[0]){
  setColor("green")
  setText("inicio de sesion exitosa")
  if (filtro[0].role == 1){
    navigation.navigate("CreateCar")
  }
  else{
    navigation.navigate("Rent")
  }

}
else{
  setColor("red")
  setText("el usuario no existe o la contraseña es incorrecta")
}


  }
    const [Password,setPassword]=useState(false)
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        defaultValues: {
          User:"",
          Password:"",
        },
      });
return(
<View style={styles.container} >
  <Image 
  style={
    {
      borderRadius:"50%",
      marginBottom:"1rem",
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
          pattern:/^[A-Z]+$/i,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            autoFocus
            label="User"
            right={<TextInput.Icon icon="account" />}
            onChangeText={onChange}
            value={value}
          ></TextInput>
        )}
        name="User"
      ></Controller>
 {errors.User?.type == "required" && (
        <Text style={{ color: "red" }}>Debes ingresar tu Usuario</Text>
      )}
       {errors.User?.type == "pattern" && (
        <Text style={{ color: "red" }}>Debes ingresar un nombre valido solo letras</Text>
      )}

<Controller
        control={control}
        rules={{
          required: true,
          minLength:6,
          maxLength:12,
          pattern:/[@!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
          style={styles.textInput}
            autoFocus
            label="Password"
            secureTextEntry={!Password}
            right={<TextInput.Icon icon={Password? "eye" : "eye-off"}
            onPress={() => setPassword(!Password)} />}
            onChangeText={onChange}
            value={value}
          ></TextInput>
        )}
        name="Password"
      ></Controller>
 {errors.Password?.type == "required" && (
        <Text style={{ color: "red" }}>Debes ingresar tu Contraseña</Text>
      )}
       {errors.Password?.type == "minLength" && (
        <Text style={{ color: "red" }}>tu contraseña debe tener almenos 6 caracteres</Text>
      )}
         {errors.Password?.type == "maxLength" && (
        <Text style={{ color: "red" }}>tu contraseña debe tener menos de 12 caracteres</Text>
      )}
       {errors.Password?.type =="pattern" && (
        <Text style={{ color: "red" }}>tu contraseña debe tener almenos un signo especial
        </Text>
      )}
            <Text style={{color:`${color}`,fontSize:"10px"}}>{text}</Text>
      <View style={styles.containerButtons}>
      <Button
          label="SignIn"
          style={styles.button}
          onPress={handleSubmit(HandlesignIn)}
        >SigIn</Button>
         <Button
          label="Register"
          style={styles.button}
          onPress={HandleRegister}
        >Register</Button>
      </View>
      <Button
          label="Forgot your password?"
          style={styles.button}
          onPress={HandlePassword}
        >Forgot your Password?</Button>
</View>
)
}