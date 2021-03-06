module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@components': './src/components',
          '@state': './src/state',
          '@Apis' :'./src/Apis',
          '@fonts': './src/assets/fonts',
          '@icons': './src/assets/icons',
          '@images': './src/assets/images',
        },
      },
    ],
  ],
}