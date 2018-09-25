var VerbalExpressions = require('verbal-expressions');
 
var phoneExp = VerbalExpressions() 
               .startOfLine()
               .maybe("(")
               .range('0', '9')
               .repeatPrevious(3)
               .maybe(")")
               .maybe(" ")
               .maybe(".")
               .range('0', '9')
               .repeatPrevious(3)
               .maybe("-")
               .maybe(".")
               .range('0', '9')
               .repeatPrevious(4)
               .endOfLine();
 
var phonenumber = {
   standard: "(123) 456-7890",
   invalid: "(123) 456-789",
   withdots: '123.456.7890'
}
 
// Use RegExp object's native test() function
if (phoneExp.test(phonenumber.standard)) {
   console.log('The phone number is valid.'); // This output will fire}
} else {
   console.log('The phone number is invalid.');
}
console.log("Generated Expression: ", phoneExp._source);
