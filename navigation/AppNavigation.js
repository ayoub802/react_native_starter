import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const AppNavigation = () => {
    
    const Stack = createNativeStackNavigator();
  return (
    
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='Home' component={HomeScreen}/>
        </Stack.Navigator>
     </NavigationContainer>
  )
}

const HomeScreen = () => {
  return(
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default AppNavigation