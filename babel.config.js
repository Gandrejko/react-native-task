module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.jsx',
            '.json',
            '.tsx',
            '.ts',
            '.native.js',
          ],
          alias: {
            '@navigation': './src/navigation',
            '@interfaces': './src/interfaces',
            '@components': './src/components',
            '@localization': './src/localization',
            '@assets': './src/assets',
          },
        },
      ],
    ],
  };
};
