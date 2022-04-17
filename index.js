
const _ = require('lodash');
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
_.pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']

_.pull(array, [values])