module.exports = function(grunt) {

    // Configure tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Generate RTL stylesheet
        cssjanus: {
            theme: {
                options: {
                    swapLtrRtlInUrl: false
                },
                files: [
                    {
                        src: 'style.css',
                        dest: 'rtl.css'
                    }
                ]
            }
        },

        // Generate POT
        makepot: {
            theme: {
                options: {
                    type: 'wp-theme'
                }
            }
        },
    });

    // Generate POT
    grunt.loadNpmTasks('grunt-wp-i18n');

    // Generate RTL
    grunt.loadNpmTasks('grunt-cssjanus');

    // Register tasks
    grunt.registerTask('default', [
        'wp-i18n',
        'cssjanus',
    ]);

};
