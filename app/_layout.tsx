import { Stack } from "expo-router";

const RootLayout = () => {
  return <Stack
  screenOptions={{headerStyle:{
    backgroundColor: '#FBBF24'
  },
  headerTintColor: '#FFFAF0',
  headerTitleStyle :{
    fontSize:40,
    fontWeight: 'bold'
  },
  contentStyle:{
    paddingHorizontal: 10,
    paddingTop:10,
    backgroundColor: '#FFFAF0'
    
  }
}} 

>

<Stack.Screen name='index' options={{title:'Home'}}/>
<Stack.Screen name='notas' options={{headerTitle:'Notas'}}/>
</Stack>; 

}

export default RootLayout
