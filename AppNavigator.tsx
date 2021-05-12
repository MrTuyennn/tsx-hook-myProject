import React from 'react';
import { StyleSheet } from 'react-native';
import LoginSneaker from 'screens/LoginSneakerScreen';
import BottomTab from 'navigation/BottomNavigation'
import RegisterSneaker from 'screens/RegisterSneakerScreen';
interface Props {

}



const AppNavigator = (props: Props) => {
    return (
        <RegisterSneaker />
    )
}

export default AppNavigator

const styles = StyleSheet.create({})
