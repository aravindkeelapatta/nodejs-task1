var fs = require("fs")

var filepath = "./sample.txt";


var data = fs.readFile(filepath, function(err, data) {
	if(err) {
		throw err;
		console.log(err)
	}
	fs.writeFile("./output.txt", data, function(err, data) {
		if(err) {
			throw err;
			console.log(err)
		}
	})
})
