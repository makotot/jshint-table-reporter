var color = require('cli-color'),
	Table = require('cli-table');

module.exports = {

	reporter: function (error) {

		console.log(color.blue.underline('JSHint reporter\n'));

		if (error.length) {

			console.log(color.red('✘  ' + error.length + ' problems found.\n'));

//			console.log(error);
			var table = new Table({
					head: ['E/W', 'File', 'Line', 'Character', 'Reason']
				}),
				status;

			error.forEach(function (err) {
				status = (err.error.code).substring(0, 1) === 'W' ? color.black.bgYellow('Waring') : color.white.bgRed('Error');

//				console.log(status + ' ' + err.file + ' : L' + err.error.line + ' : C' + err.error.character + ' : ' + err.error.reason);
				table.push([status, err.file, err.error.line, err.error.character, err.error.reason]);
			});

			console.log(table.toString());

		} else {

			console.log(color.green('No error found.'));

		}

	}

};
