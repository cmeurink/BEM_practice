const sass = require('node-sass');

module.exports = (grunt) => {
    grunt.initConfig({
        eslint: {
            options: {
                configFile: '.eslintrc.json',
            },
            target: ['src/js/**.js']
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'src/css/main.css': 'src/sass/main.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/js/*.js'],
                tasks: ['eslint'],
                options: {
                  spawn: false,
                },
            },
            css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['eslint', 'sass']);
};