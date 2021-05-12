import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTE_KEY } from 'constants/contants';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import HomeSneaker from 'screens/HomeSneakerScreen'
import CardSneaker from 'screens/CardSneakerScreen'
import CategorySneaker from 'screens/CategorySneakerScreen'
import BrandSneaker from 'screens/BrandSneakerScreen'
import ProfileSneaker from 'screens/ProfileAccountScreen'
import LoginSneaker from 'screens/LoginSneakerScreen'
import SplashScreen from 'screens/SplashSneakerScreen'
import RegisterSneaker from 'screens/RegisterSneakerScreen'
import Icon from 'assets/icons/Icon';
import { HEIGHT_SCALE_RATIO, ptColor, style, WIDTH_SCALE_RATIO } from 'constants/styles';
import { d } from 'assets/icons/d'
interface Props {

}
const Tab = createBottomTabNavigator();

function BottomTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarLabel: ({ focused, color, position }) => {
                    if (route.name === ROUTE_KEY.HomeSneaker) {
                        return (focused ? <Text style={[style.textCaption, { color: ptColor.blue }]}>Trang chủ</Text> : undefined)
                    } else if (route.name === ROUTE_KEY.CategorySneaker) {
                        return (focused ? <Text style={[style.textCaption, { color: ptColor.blue }]}>Thể loại</Text> : undefined)
                    } else if (route.name === ROUTE_KEY.BrandSneaker) {
                        return (focused ? <Text style={[style.textCaption, { color: ptColor.blue }]}>Giày</Text> : undefined)
                    } else if (route.name === ROUTE_KEY.CardSneaker) {
                        return (focused ? <Text style={[style.textCaption, { color: ptColor.blue }]}>Giỏ hàng</Text> : undefined)
                    } else if (route.name === ROUTE_KEY.ProfileSneaker) {
                        return (focused ? <Text style={[style.textCaption, { color: ptColor.blue }]}>Tài khoản</Text> : undefined)
                    }
                },
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === ROUTE_KEY.HomeSneaker) {
                        return (<Icon
                            height={20 * HEIGHT_SCALE_RATIO}
                            width={20 * WIDTH_SCALE_RATIO}
                            color={focused ? ptColor.appColor : ptColor.textPlaceholderColor}
                            d={d.ic_Home} />)
                    } else if (route.name === ROUTE_KEY.CategorySneaker) {
                        return (<Icon
                            height={20 * HEIGHT_SCALE_RATIO}
                            width={20 * WIDTH_SCALE_RATIO}
                            color={focused ? ptColor.appColor : ptColor.textPlaceholderColor}
                            d={d.ic_category} />)
                    } else if (route.name === ROUTE_KEY.BrandSneaker) {
                        return (<Icon
                            height={30 * HEIGHT_SCALE_RATIO}
                            width={30 * WIDTH_SCALE_RATIO}
                            color={focused ? ptColor.appColor : ptColor.textPlaceholderColor}
                            d={d.ic_Sneaker} />)
                    } else if (route.name === ROUTE_KEY.CardSneaker) {
                        return (<Icon
                            height={20 * HEIGHT_SCALE_RATIO}
                            width={20 * WIDTH_SCALE_RATIO}
                            color={focused ? ptColor.appColor : ptColor.textPlaceholderColor}
                            d={d.ic_cart} />)
                    } else if (route.name === ROUTE_KEY.ProfileSneaker) {
                        return (<Icon
                            height={20 * HEIGHT_SCALE_RATIO}
                            width={20 * WIDTH_SCALE_RATIO}
                            color={focused ? ptColor.appColor : ptColor.textPlaceholderColor}
                            d={d.ic_user} />)
                    }
                },
            })}

            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',

            }}>
            <Tab.Screen name={ROUTE_KEY.HomeSneaker} component={HomeSneaker} />
            <Tab.Screen name={ROUTE_KEY.CategorySneaker} component={CategorySneaker} />
            <Tab.Screen name={ROUTE_KEY.BrandSneaker} component={BrandSneaker} />
            <Tab.Screen name={ROUTE_KEY.CardSneaker} component={CardSneaker} />
            <Tab.Screen name={ROUTE_KEY.ProfileSneaker} component={ProfileSneaker} />
        </Tab.Navigator>
    )
}

const AppNavigator = (props: Props) => {
    return (
        <LoginSneaker/>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})
