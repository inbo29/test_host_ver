const path = require("path");
// const withSass = require('@zeit/next-sass');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // i18n: {
  //   defaultLocale: "en",
  //   Locales: ['en', 'ko'],
  //   domains: [
	// 		{
	// 			domain: 'greatreset.io',
	// 			defaultLocale: 'eng',
	// 		},
	// 		{
	// 			domain: 'greatreset.eng',
	// 			defaultLocale: 'eng',
	// 		},
	// 		{
	// 			domain: 'greatreset.kor',
	// 			defaultLocale: 'kor',
	// 		},
	// 	]
  // },
};

const withVideos = require('next-videos')

module.exports = withVideos()