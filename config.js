const devBuild = (process.env.NODE_ENV || '').trim().toLowerCase() !== 'production',
  pkg = require('./package.json'),
  dir = {
    base: __dirname + '/',
    lib: __dirname + '/lib/',
    source: './src/',
    dest: './build/'
  };

module.exports = {
  templateConfig: {
    engine: 'handlebars',
    directory: dir.source + 'templates/',
    partials: {
      header: 'partials/header',
      footer: 'partials/footer'
    },
    default: 'home.hbt'
  },
  metadata: {
    siteUrl: process.env.SITE_URL || 'https://google.com',
    siteName: 'MyBlog',
    siteDesc: 'news for developer',
    social: {
      twitter: '@nguyendhse'
    }
  },
  collections: {
    pages: {
      pattern: 'content/pages/*.md'
    },
    articles: {
      pattern: 'content/articles/**/*.md',
      sortBy: 'date'
    }
  },
  permalinks: {
    pattern: ':collections/:title'
  },
  assets: { src: dir.source + 'assets', dest: '.' },
  buildDev: devBuild
};
