// Add code to Run Nodemon. Running codemon shall ensure that server do not close on recieving errors.

// Code shall re-run once the files are modified.

// Install grunt-cli using npm before using grunt command.

module.exports = function(grunt) {
   grunt.initConfig({
    nodemon: {
      all: {
        script: 'server.js',
        options: {
          watchedExpressions: ['js']
        }
      }
    }
  })
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.registerTask('default', ['nodemon']);
}