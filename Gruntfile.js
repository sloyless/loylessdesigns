'use_strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    project: {
      theme: ['seanloylessdesigns'],
      base: ['./public'],
      source: ['./source/<%= project.theme %>'],
      pluginSouce: ['./source/plugins'],
      js: ['<%= project.source %>/scripts'],
      build: ['<%= project.base %>/wp-content'],
      css: ['<%= project.source %>/styles'],
    },
    // Sass -> CSS
    sass: {
      dev: {
        options: {
          outputStyle: 'expanded',
          sourceMap: true
        },
        files: {
            "<%= project.build %>/themes/<%= project.theme %>/styles.css": "<%= project.css %>/styles.scss"
        }
      },
      build: {
        options: {
          outputStyle: 'expanded',
          sourceMap: false,
          sourceMapEmbed: false
        },
        files: {
            "<%= project.build %>/themes/<%= project.theme %>/styles.css": "<%= project.css %>/styles.scss"
        }
      }
    },
    //** UNIT TESTS AND JSHINT **/
    // Checks javascript for errors
    jshint: {
      options: {
        jshintrc: './source/.jshintrc',
        reporter: require('jshint-stylish')
      },
      dev: [
        '<%= project.build %>/scripts/**/*.js',
        '!<%= project.build %>/scripts/vendor/**/*.js'
      ],
      build: [
        '<%= project.build %>/scripts/**/*.js',
        '!<%= project.build %>/scripts/vendor/**/*.js'
      ]
    },
    // Adds any relevate autoprefixers supporting IE 11 and above
    autoprefixer: {
      options: {
        browsers: ["> 1%", "ie > 10"],
        map: false
      },
      target: {
        files: {
          "<%= project.build %>/themes/<%= project.theme %>/styles.css": "<%= project.build %>/themes/<%= project.theme %>/styles.css"
        }
      }
    },
    notify: {
      sass:{
        options:{
          title: "Grunt",
          message: "Sass Compiled Successfully.",
          duration: 2,
          max_jshint_notifications: 1
        }
      },
      plugins:{
        options:{
          title: "Grunt",
          message: "Plugins Updated Successfully.",
          duration: 2,
          max_jshint_notifications: 1
        }
      },
      assets:{
        options:{
          title: "Grunt",
          message: "Assets Copied Successfully.",
          duration: 2,
          max_jshint_notifications: 1
        }
      },
      js:{
        options:{
          title: "Grunt",
          message: "Javascript Updated Successfully.",
          duration: 2,
          max_jshint_notifications: 1
        }
      }
    },
    // Copies remaining files to places other tasks can use
    copy: {
      dev: {
        expand: true,
        cwd: '<%= project.source %>/',
        src: [
          '*.{ico,png,txt}',
          'scripts/**/*',
          'assets/**/*',
          '**/*.html',
          'screenshot.png'
        ],
        dest: '<%= project.build %>/themes/<%= project.theme %>',
      },
      build: {
        expand: true,
        cwd: '<%= project.source %>/',
        src: [
          '*.{ico,png,txt}',
          'scripts/**/*',
          'assets/**/*',
          '**/*.html',
          'screenshot.png'
        ],
        dest: '<%= project.build %>/themes/<%= project.theme %>',
      },
      plugins: {
        expand: true,
        cwd: '<%= project.pluginSouce %>/',
        src: ['**/*'],
        dest: '<%= project.build %>/plugins'
      },
    },
    sync: {
      html: {
        files: [{
          cwd: '<%= project.source %>/',
          src: ['**/*.html'],
          dest: '<%= project.build %>/themes/<%= project.theme %>'
        }],
      },
      js: {
        files: [{
          cwd: '<%= project.source %>/',
          src: ['scripts/*.js'],
          dest: '<%= project.build %>/themes/<%= project.theme %>'
        }],
      },
      assets: {
        files: [{
          cwd: '<%= project.source %>/',
          src: ['assets/**/*'],
          dest: '<%= project.build %>/themes/<%= project.theme %>'
        }],
      },
      plugins: {
        files: [{
          cwd: '<%= project.pluginSouce %>/',
          src: ['**/*'],
          dest: '<%= project.build %>/plugins'
        }]
      }
    },
    // Empties folders to start fresh
    clean: {
      dev: {
        files: [{
          dot: true,
          src: [
            '<%= project.build %>/themes/<%= project.theme %>/{,*/}*'
          ]
        }]
      },
      build: {
        files: [{
          dot: true,
          src: [
            '<%= project.build %>/themes/<%= project.theme %>/{,*/}*'
          ]
        }]
      }
    },
    watch: {
      sass: {
        files: ['<%= project.css %>/**/*.{scss,sass}'],
        tasks: ['sass:dev','autoprefixer','notify:sass']
      },
      // Sync tasks for PHP, Plugins, and Images
      html: {
        files: ['<%= project.source %>/**/*.html'],
        tasks: ['sync:php', 'notify:php']
      },
      plugins: {
        files: '<%= project.pluginSouce %>/**/*',
        tasks: ['sync:plugins', 'notify:plugins']
      },
      assets: {
        files: ['<%= project.source %>/assets/**/*'],
        tasks: ['sync:assets', 'notify:assets']
      },
      js: {
        files: ['<%= project.source %>/scripts/**/*.js'],
        tasks: ['jshint:dev', 'sync:js', 'notify:js']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            '<%= project.build %>/themes/<%= project.theme %>/styles.css',
            '<%= project.build %>/themes/<%= project.theme %>/**/*.js',
            '<%= project.build %>/themes/<%= project.theme %>/assets/**/*.*',
            '<%= project.build %>/themes/<%= project.theme %>/**/*.{php,html}',
            '<%= project.build %>/plugins/**/*.*'
          ]
        },
        options: {
          port: 9000,
          watchTask: true,
          notify: true,
          open: true,
          logLevel: 'info',
          ghostMode: {
            clicks: true,
            scroll: true,
            links: true,
            forms: true
          }
        }
      }
    }
  });
  // Watch task - sourcemaps generated
  grunt.registerTask('default', [
    'clean:dev',
    'copy:dev',
    'copy:plugins',
    'sass:dev',
    'autoprefixer',
    'jshint:dev',
    'browserSync',
    'watch'
  ]);

  // Build task
  grunt.registerTask('build', [
    'clean:build',
    'copy:build',
    'copy:plugins',
    'sass:build',
    'autoprefixer',
    'jshint:build'
  ]);
};
