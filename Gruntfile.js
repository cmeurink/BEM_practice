const sass = require('node-sass');
 
// require('load-grunt-tasks')(grunt);

module.exports = (grunt) => {
    grunt.initConfig({
        eslint: {
            configFile: '/eslint.json',
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
                files: ['src/**/*.js','src/**/*.scss'],
                tasks: ['eslint', 'sass'],
                options: {
                    spawn: false,
                },
            },
        },
    })

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('watch', ['watch']);
    grunt.registerTask('default', ['eslint']);
};