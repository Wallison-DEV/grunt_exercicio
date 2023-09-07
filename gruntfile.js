module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development:{
                files:{
                    './dev/styles/main.css' : './source/styles/main.less'
                }
            }
        },
        uglify:{
            target:{
                files:{
                    'dev/scripts/main.min.js':'source/scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['less:development', 'uglify'])
}