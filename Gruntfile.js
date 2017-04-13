// Gruntfile for all tasks on IMC Industrial

module.exports = function(grunt) {
  // require('load-grunt-tasks')(grunt, {
  //
  // });

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      scripts: {
        expand: true,
        cwd: 'dev/js',
        src: ['*.js', '**/*.js'],
        dest: 'public/assets/js',
        ext: '.js'
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
          dest: 'public/assets/css',
          ext: '.min.css'
        }]
      }
    }

    // watch: {
    //
    // }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify', 'sass', 'cssmin']);
  grunt.registerTask('grunt-sass', ['sass']);
};
