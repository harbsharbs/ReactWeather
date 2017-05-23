//
//
// function getTempPromise (location) {
//   return new Promise (function(resolve, reject) {
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise error', err)
// })
//
//
// if (typeof 7 === 'number')
// // Challenge Area


//
function addPromise (a, b) {
  return new Promise (function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number'){
      resolve (a + b);
    } else {
      reject ('A & B need to be numbers');
      }
    });
}

addPromise('guck', 6).then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log('error', err);
});
