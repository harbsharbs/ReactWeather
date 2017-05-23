// var names = ['Steve', 'Andrew', 'Fiona'];
//
// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log ('arrowFunc', name);
// });
//
// names.forEach((name)=> console.log (name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Steve'));
//
// var person = {
//   name: 'Steve',
//   greet: function (){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();


function add(a, b){
  return a + b;
}
// console.log (add(1, 3));
// console.log (add(9, 0));


//addStatement - used to call multiple
var addStatement = (a, b) => {
  return a + b;
}
console.log (addStatement(4,7));

//addExpression - used in singular cases
var addExpression = (a, b) => a + b;
console.log (addExpression (9,11));
