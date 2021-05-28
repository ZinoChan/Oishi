const withTM = require('next-transpile-modules')(['react-st-modal']);

module.exports = withTM(
  {
    images: {
        domains: ["firebasestorage.googleapis.com"],
      },
}
)

