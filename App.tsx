import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator'
import { ThemeProvider } from 'react-native-elements'
interface Props {

}

const theme = {
  Button: {
    buttonStyle: {
      height: 54,
    },
  },
};

const App = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App

const styles = StyleSheet.create({})
