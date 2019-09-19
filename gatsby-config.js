// in gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hendro | Portfolio`,
        short_name: `Hendro Portfolio`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: 'src/icon/favicon.png'
      },
    },
    "gatsby-plugin-react-helmet"
  ],
}
