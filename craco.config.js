const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          // We need to alias react to the one installed in the node_modules
          // in order to solve the error "hooks can only be called inside the body of a function component"
          // which is encountered during desktop jest unit tests,
          // described at https://github.com/facebook/react/issues/13991
          // This is caused by two different instances of react being loaded:
          // * the first at phone/node_modules
          // * the second at @aircall/tractor/node_modules
          react: "./node_modules/react",
        },
      },
    },
  ],
};
