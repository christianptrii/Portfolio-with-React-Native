module.exports = {
  presets: ['babel-preset-expo'],
  presets: ['module:metro-react-native-babel-preset'],
  overrides: [{
    "plugins": [
      ["@babel/plugin-transform-private-methods", {
      "loose": true
    }]
    ]
  }]
};