import { d } from 'assets/icons/d'
import Icon from 'assets/icons/Icon'
import SRow from 'components/SRow'
import { FS, HEIGHT_SCALE_RATIO, ptColor, style, WIDTH_SCALE_RATIO } from 'constants/styles'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements'
import SButton from 'components/SButton'
import LinearGradient from 'react-native-linear-gradient';
interface Props {

}

const LoginSneakerScreen = (props: Props) => {
    const [showPass, setshowPass] = useState(false || Boolean)

    const handleShowPass = () => {
        setshowPass(!showPass)
    }


    return (
        <View style={{
            flex: 1,
            padding: 20 * HEIGHT_SCALE_RATIO,
            backgroundColor: ptColor.bgGray
        }}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 20 * HEIGHT_SCALE_RATIO
            }}>
                <Icon
                    height={80 * HEIGHT_SCALE_RATIO}
                    width={80 * WIDTH_SCALE_RATIO}
                    color={ptColor.blue}
                    d={d.logo_Sneaker} />
                <SRow>
                    <Text style={[style.textCaption, {
                        color: ptColor.blue,
                        fontSize: FS(20),
                        marginHorizontal: 7 * WIDTH_SCALE_RATIO
                    }]}>SNEAKER</Text>
                    <Text style={[style.textCaption, {
                        color: ptColor.black,
                        fontSize: FS(20),
                        marginHorizontal: 7 * WIDTH_SCALE_RATIO
                    }]}>STORE</Text>
                </SRow>
            </View>

            <Text style={[style.textCaption, {
                fontSize: FS(22),
                marginTop: 20 * HEIGHT_SCALE_RATIO
            }]}>ĐĂNG NHẬP</Text>
            <Text style={[style.textCaption, {
                color: ptColor.textPlaceholderColor,
                fontSize: FS(18)
            }]}>Đăng nhập để tiếp tục</Text>

            <Input
                placeholder='Nhập số điện thoại'
                placeholderTextColor={ptColor.textPlaceholderColor}
                inputContainerStyle={{
                    borderBottomWidth: 0,
                }}
                containerStyle={{
                    borderWidth: 1,
                    borderColor: ptColor.blue,
                    height: 45 * HEIGHT_SCALE_RATIO,
                    backgroundColor: ptColor.white,
                    borderRadius: 5 * HEIGHT_SCALE_RATIO,
                    marginTop: 40 * HEIGHT_SCALE_RATIO,
                }}
                keyboardType="phone-pad"
                underlineColorAndroid="transparent"
                inputStyle={[style.textCaption, {
                    color: ptColor.black,
                    fontSize: FS(16)
                }]} />

            <Input
                placeholder='Nhập mật khẩu'
                placeholderTextColor={ptColor.textPlaceholderColor}
                inputContainerStyle={{
                    borderBottomWidth: 0,
                }}
                containerStyle={{
                    borderWidth: 1,
                    borderColor: ptColor.blue,
                    height: 45 * HEIGHT_SCALE_RATIO,
                    backgroundColor: ptColor.white,
                    borderRadius: 5 * HEIGHT_SCALE_RATIO,
                    marginTop: 20 * HEIGHT_SCALE_RATIO,
                    marginBottom: 10 * HEIGHT_SCALE_RATIO,
                }}
                inputStyle={[style.textCaption, {
                    color: ptColor.black,
                    fontSize: FS(16),
                }]}
                secureTextEntry={!showPass}
                rightIcon={
                    <Icon
                        onPress={() => handleShowPass()}
                        height={20}
                        width={20}
                        color={ptColor.Gray}
                        d={showPass ? d.ic_hide_eye : d.ic_eye} />
                } />
            <Text style={[style.textCaption, {
                textAlign: 'right',
                fontSize: FS(14),
                color: ptColor.blue
            }]}>Quên mật khẩu?</Text>

            <SButton
                solid
                title='Đăng nhập' />

        </View>
    )
}

export default LoginSneakerScreen

const styles = StyleSheet.create({})
