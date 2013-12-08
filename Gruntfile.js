module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			options: {
				reporter: require('./index.js')
			},
			files: ['examples/*.js']
		}
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['jshint']);
};

