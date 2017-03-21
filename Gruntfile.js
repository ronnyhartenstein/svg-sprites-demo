module.exports = function(grunt) {
  grunt.initConfig({
    svgstore: {
		options: {
			prefix : 'icon-' + (!!praefix ? praefix + '_' : '')
		},
		files: { 
            'icons_svgsprite.svg': 'icons/*.svg'
        }
    },
    watch: {
      files: ['icons/*.svg'],
      tasks: ['svgstore']
    }
  });
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.registerTask('default', ['svgstore']);
};
