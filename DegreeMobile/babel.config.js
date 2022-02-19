module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        "root": ["./src"],
        "alias": {
          "@components": "./src/components",
          "@views": "./src/views",
          "@models": "./src/models",
          "@navigations": "./src/navigations",
        }
      }
    ],
  ]
};
