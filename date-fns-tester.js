/**
 * date-fns is a module that provides a toolset for manipulating 
 * JavaScript dates in a browser & Node.js.
 */
const format = require('date-fns/format');
const parse = require('date-fns/parse');

function isValidDate(dateString) {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regEx))
        return false;  // Invalid format
    var d = new Date(dateString);
    if (!d.getTime() && d.getTime() !== 0)
        return false; // Invalid date
    return d.toISOString().slice(0, 10) === dateString;
}

function validateTime(strTime) {
    var regex = new RegExp("([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])");
    if (regex.test(strTime)) {
        return true;
    } else {
        return false;
    }
}

var myDate = '2015-02-28 24:30:00';
var parts = myDate.split(" ");

console.log("\nVALIDATING DATE:");
console.log(validateTime(parts[1]));
console.log(isValidDate(parts[0]));

console.log("\nFORMATING DATE:");
var str = format(new Date(), 'YYYY-MM-DD');
console.log("This is a " + typeof str + ": " + str);

console.log("\nPARSING DATE:");
var result = parse('2013-02-30 13:30:30');
console.log(result);
console.log("This is a " + typeof result + ": " + result);