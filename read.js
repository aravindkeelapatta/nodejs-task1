var fs = require("fs");

var filepath = "./output.txt";

var data = fs.readFile(filepath, function(err, data) {
	if(err) {
		throw err;
		console.log(err)
	}
	fs.writeFile("./write.txt" , data, function(err, data) {
		if(err) {
			throw err;
		}
	})
})

