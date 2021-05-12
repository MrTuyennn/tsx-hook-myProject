import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'

interface Props {
    children?: React.ReactNode,
    style?: ViewStyle,
    onPress?: () => void
}

const SRow = (props: Props) => {
    if (props.onPress) {
        return (
            <TouchableOpacity
                {...props}
                onPress={props.onPress}
                style={[{
                    flexDirection: 'row',
                    alignItems: 'center',
                }, props.style || {}]}>
                {props.children}
            </TouchableOpacity>
        )
    }
    return (
        <TouchableOpacity
            {...props}
            style={[{
                flexDirection: 'row',
                alignItems: 'center',
            }, props.style || {}]}>
            {props.children}
        </TouchableOpacity>)
}

export default SRow

const styles = StyleSheet.create({})
