module.exports = logToConsole => (files, metalsmith, done) => {
  if (logToConsole) {
    console.log('\nMETADATA:');
    console.log(metalsmith.metadata());
    for (var f in files) {
      console.log('\nFILE:');
      console.log(files[f]);
    }
  }
  done();
};
