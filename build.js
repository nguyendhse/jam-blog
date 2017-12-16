const path = require('path');
//custom-config
const config = require('./config');
//built-in-plugins
const Metalsmith = require('metalsmith'),
  markdown = require('metalsmith-markdown'),
  templates = require('metalsmith-templates'),
  collections = require('metalsmith-collections'),
  permalinks = require('metalsmith-permalinks'),
  assets = require('metalsmith-static'),
  publish = require('metalsmith-publish');

//self-plugins
const debug = require('./plugins/debug');

Metalsmith(__dirname)
  .source(path.resolve(__dirname, 'src/content'))
  .metadata(config.metadata)
  .use(collections(config.collections))
  .use(assets(config.assets))
  .use(markdown())
  .use(permalinks(config.permalinks))
  .use(publish())
  .use(templates(config.templateConfig))
  .use(debug(false))
  .clean(!config.buildDev)
  .destination('./build')
  .build(err => {
    if (err) console.log(err);
  });
