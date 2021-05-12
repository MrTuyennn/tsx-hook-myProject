import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
    color?: string;
    height?: number;
    width?: number;
    d?: any;
    onPress?: () => void;
}

export const Icon = (props: Props) => {
    if (props.onPress) {
        return (
            <Svg onPress={props.onPress} height={props.height} width={props.width} viewBox="0 0 512 512">
                {
                    props.d?.map((item?: any) => {
                        return (
                            <Path
                                key={item}
                                fill={props.color}
                                fillRule="evenodd"
                                d={item} />
                        )
                    })
                }

            </Svg>
        )
    }
    return (
        <Svg height={props.height} width={props.width} viewBox="0 0 512 512">
            {
                props.d?.map((item?: any) => {
                    return (
                        <Path
                            key={item}
                            fill={props.color}
                            fillRule="evenodd"
                            d={item} />
                    )
                })
            }

        </Svg>
    )
}

export default Icon
