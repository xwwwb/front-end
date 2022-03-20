const fs = require("fs")
const util = require("util")

let mineReadFile = util.promisify(fs.readFile)

mineReadFile("./resource/content.txt").then(
	(value) => {
		console.log(value.toString())
	},
	(reason) => {
		console.log(reason)
	}
)
