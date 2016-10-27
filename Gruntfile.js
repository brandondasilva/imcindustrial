module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      scripts: {
        expand: true,
        cwd: 'dev/js',
        src: ['*.js', '**/*.js'],
        dest: 'assets/js',
        ext: '.min.js'
      }
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'dev/sass',
          src: ['*.scss'],
          dest: 'dev/css',
          ext: '.css'
        }]
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dev/css',
          src: ['*.css', '!*.min.css'],
          dest: 'assets/css',
          ext: '.min.css'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['uglify', 'sass', 'cssmin']);
  grunt.registerTask('grunt-sass', ['sass']);
};
