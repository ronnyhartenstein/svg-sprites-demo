module.exports = function(grunt) {
  grunt.initConfig({
    svgstore: {
      icons: {
        files: { 
          'icons_svgsprite.svg': 'icons/*.svg'
        }}},
    watch: {
      svgstore: {
        files: ['icons/*.svg'],
        tasks: ['svgstore']
        }}
  });
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['svgstore']);
};
