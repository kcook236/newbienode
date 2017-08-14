const moment = require("moment")

function DST () {
  if (moment().isDST("YYYY, M, D") == true) {
    return("Daylight Savings Time.")}
    else {
      if (moment().isDST("YYYY, M, D") == false) {
        return("not Daylight Savings Time.")
      }
    }
}

function seconds () {
  return ((moment().format("HH") * 3600) + (moment().format("MM")*60) + (moment().format("ss")*1))
}


function lY () {
  if (moment().isLeapYear("YYYY")== true) {
    return("not a Leap Year")
  } else {
    if (moment().isLeapYear("YYYY") == false) {
      return("a Leap Year")
    }
  }
}

module.exports = {
  lY: lY,
  DST: DST,
  seconds: seconds
}
