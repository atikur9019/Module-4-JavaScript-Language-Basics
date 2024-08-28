/************************
 * Operator Precedence
 */

var now = 2024;
var yearAtikur = 2009;
var fullAge = 14;
// Multiple Operators
var isFullAge = now - yearAtikur >= fullAge;
// console.log(isFullAge);

if (isFullAge >= 18) {
    console.log("Eligible to open an Atikur Shortsi account");
}
else{
    console.log("Atikur is not eligible to open a Shortsi account");

}