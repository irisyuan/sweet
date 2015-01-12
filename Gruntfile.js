'use strict';

module.exports = function(grunt) {
  grunt.initConfig ({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css' : 'sass/style.scss'
        }
      }
    },
    watch: {
      source: {
        files: ['sass/**/*.scss'],
        tasks: ['sass']
      }
    }

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.registerTask('default', ['sass']);
};