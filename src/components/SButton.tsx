import { style } from 'constants/styles'
import React, { memo } from 'react'
import { StyleSheet, Text, ViewStyle, TextStyle } from 'react-native'
import { Button, ButtonProps } from 'react-native-elements'

interface Props extends ButtonProps {
    solid?: boolean;
    clear?: boolean;
    outline?: boolean;
}

const SButton = (props: Props) => {
    if (props.solid) {
        return (
            <Button
                {...props}
                type='solid'
                title={props.title || 'Tiếp tục'}
                titleStyle={[style.titleSolid, props.titleStyle] as TextStyle}
                buttonStyle={[style.buttonContainer, props.buttonStyle] as ViewStyle} />
        )
    } else if (props.clear) {
        return (
            <Button
                {...props}
                type='clear'
                title={props.title || 'Tiếp tục'}
                titleStyle={[style.titleSolid, props.titleStyle] as TextStyle}
                buttonStyle={[style.buttonClear, props.buttonStyle] as ViewStyle} />
        )
    } else if (props.outline) {
        return (
            <Button
                {...props}
                type='outline'
                title={props.title || 'Tiếp tục'}
                titleStyle={[style.titleSolid, props.titleStyle] as TextStyle}
                buttonStyle={[style.buttonContainer, props.buttonStyle] as ViewStyle} />
        )
    }
    return (
        <Button
            {...props}
            type='solid'
            title={props.title || 'Tiếp tục'}
            titleStyle={[style.titleSolid, props.titleStyle] as TextStyle}
            buttonStyle={[style.buttonContainer, props.buttonStyle] as ViewStyle} />
    )

}

export default memo(SButton)

const styles = StyleSheet.create({})
