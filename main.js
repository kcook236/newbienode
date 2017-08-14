const moment = require("moment")
const chalk = require("chalk")
const moments = require("./moments")
const color = require("./color")

console.log("It is " + color.blue(moment().format("dddd, MMMM Do, YYYY, h:mm:ss A")))

console.log("It is the " + color.purple(moment().format("DDDo")) + " day of the year.")

console.log("It is " + color.blue(moments.seconds() + " seconds into the day."))

console.log("It " + color.green("is ") + moments.DST())

console.log("It " + color.red("is ") + moments.lY())
