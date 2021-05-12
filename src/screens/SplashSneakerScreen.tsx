import { d } from 'assets/icons/d'
import Icon from 'assets/icons/Icon'
import SRow from 'components/SRow'
import { FS, HEIGHT_SCALE_RATIO, ptColor, style, WIDTH_SCALE_RATIO } from 'constants/styles'
import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

interface Props {

}

const SplashSneakerScreen = (props: Props) => {
    const translation = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(translation, {
            toValue: 100,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    }, []);
    return (
        <Animated.View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: translation.interpolate({
                inputRange: [0, 20, 40, 60, 80, 100],
                outputRange: [0, 0.4, 0.8, 0.4, 0.8, 1],
            }),
            // transform: [
            //     { translateX: translation },
            //     {
            //         rotate: translation.interpolate({
            //             inputRange: [0, 360],
            //             outputRange: ['0deg', '360deg'],
            //         }),
            //     },
            // ],
        }}>
            <Icon
                height={150 * HEIGHT_SCALE_RATIO}
                width={150 * WIDTH_SCALE_RATIO}
                color={ptColor.blue}
                d={d.logo_Sneaker} />
            <SRow>
                <Text style={[style.textCaption, {
                    color: ptColor.blue,
                    fontSize: FS(40),
                    marginHorizontal: 10 * WIDTH_SCALE_RATIO
                }]}>SNEAKER</Text>
                <Text style={[style.textCaption, {
                    color: ptColor.black,
                    fontSize: FS(40),
                    marginHorizontal: 10 * WIDTH_SCALE_RATIO
                }]}>STORE</Text>
            </SRow>
        </Animated.View>
    )
}

export default SplashSneakerScreen

const styles = StyleSheet.create({})
