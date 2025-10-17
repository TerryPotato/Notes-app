import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PostitImage from '@/assets/images/postit.png';

const Homescreen = () => {

  const router = useRouter()

  return (
    <View style={styles.container}>
      <Image source= {PostitImage} style={styles.image}/>
      <Text style={styles.titulo}>¡HOLA!</Text>
      <Text style={styles.titulo}>Bienvenido a tu {'\n'} aplicación de notas</Text>
      <Text style={styles.subtitulo}>Captura tus notas en cualquier lugar{'\n'}y en cualquier momento</Text>
      <TouchableOpacity
      style = {styles.button}
      onPress={()=>router.push('./notes')}
        >
       <Text style={{color: '#fff', fontSize : 20, fontWeight : 'bold' }}> Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#ffff'
      
  },
  image:{
    width:300,
    height:220,
    marginBottom :20,
    borderRadius: 3

  },
  titulo:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom:10,
    color: "#333",
    textAlign: 'center'

  },
  subtitulo:{
    fontSize:18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,

  },
  button:{
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    paddingHorizontal:25,
    borderRadius:8,
    alignItems: 'center',
  },
})



export default Homescreen