import { Dimensions, Platform, PixelRatio } from 'react-native'


// get MaxHeight && MaxWidth
export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

// setting Platform with android or ios
export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';

// Use iPhone6 as base size which is 375 x 667
const baseWidth = 398;
const baseHeight = 736;

// Screen scale 
export const HEIGHT_SCALE_RATIO = HEIGHT / baseHeight;
export const WIDTH_SCALE_RATIO = WIDTH / baseWidth;

export const iconSize = 24 * WIDTH_SCALE_RATIO;

export const fontSize =
    PixelRatio.get() <= 1.5
        ? 14
        : PixelRatio.get() > 1.5 && PixelRatio.get() < 3
            ? 15
            : 16;
//font scale
const scale = Math.min(WIDTH_SCALE_RATIO, HEIGHT_SCALE_RATIO);
export const FS = (size = fontSize) => Math.ceil(size * scale);

export const ptFont = {
    REGULAR: 'Nunito-Regular',
    MEDIUM: 'Nunito-SemiBold',
    BOLD: 'Nunito-Bold',
    BLACK: 'Nunito-Black',
};
export const ptColor = {
    green: '#3BB54A',
    blue: '#0A8FD8',
    bgRed: '#F44336',
    Gray: '#4D4D4D',
    bgGray: '#fafafa',
    yellow: '#F2C94C',
    origin: '#FF5100',
    appColor: '#0A8FD8',
    textColor: '#032E42',
    textPlaceholderColor: '#aaaaaa',
    black: '#222222',
    white: '#ffffff',
    transparent: 'transparent',
    lineGradientBlue: ['#0090DF', '#0090DF'],
}


export const ptText = {
    H0: {
        fontSize: FS(fontSize) + 12,
        fontFamily: ptFont.MEDIUM,
    },
    H1: {
        fontSize: FS(fontSize) + 8,
        fontFamily: ptFont.MEDIUM,
    },
    H2: {
        fontSize: FS(fontSize) + 6,
        fontFamily: ptFont.MEDIUM,
    },
    H3: {
        fontSize: FS(fontSize) + 4,
        fontFamily: ptFont.MEDIUM,
    },
    H4: {
        fontSize: FS(fontSize) + 2,
        fontFamily: ptFont.MEDIUM,
    },
    BODY1: {
        fontSize: FS(fontSize) + 0,
        fontFamily: ptFont.REGULAR,
    },
    BODY2: {
        fontSize: FS(fontSize) - 2,
        fontFamily: ptFont.REGULAR,
    },
    SMALL1: {
        fontSize: FS(fontSize) - 3,
        fontFamily: ptFont.REGULAR,
    },
    SMALL2: {
        fontSize: FS(fontSize) - 5,
        fontFamily: ptFont.MEDIUM,
    },
    BUTTON: {
        fontSize: FS(fontSize) - 2,
        fontFamily: ptFont.MEDIUM,
    },
};

export const style = {
    textCaption: {
        ...ptText.SMALL1,
        fontFamily: ptFont.MEDIUM,
        // color: ptColor.textSubColor,
    },

    titleSolid: {
        ...ptText.H4,
        fontFamily: ptFont.BOLD,
        textTransform: 'uppercase',
    },
    buttonContainer:{
      paddingVertical: 10 * WIDTH_SCALE_RATIO,
      justifyContent: 'center',
      alignItems: 'center'
    },

    buttonClear: {
        borderWidth: 1,
        borderColor: ptColor.blue,
        paddingVertical: 10 * WIDTH_SCALE_RATIO,
        justifyContent: 'center',
        alignItems: 'center'
    }
}


