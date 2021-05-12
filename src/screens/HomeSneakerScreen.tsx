import { ptColor } from 'constants/styles'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon } from 'assets/icons/Icon'
import { d } from 'assets/icons/d'

interface Props {
    navigation?: any;
    router?: any;
}

const HomeScreen = (props: Props) => {
    return (
        <View>
            <Icon
                height={150}
                width={150}
                color={ptColor.green}
                d={d.ic_user} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
