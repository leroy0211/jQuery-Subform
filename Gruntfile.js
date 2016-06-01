module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    qunit: {
        all: ['test/*.html']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-qunit');


  // Default task(s).
  grunt.registerTask('default', []);

  grunt.registerTask('test', ['qunit']);
};
