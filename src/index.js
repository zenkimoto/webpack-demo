import _ from 'lodash';
import $ from 'jquery';

function component() {
    return $("<div/>").html(_.join(['Hello', 'webpack', 'Alex'], ' '));
}
  
$('body').append(component())

  
let p = new Promise(function(resolve, reject) {  
    resolve(1);
 });

p.then(function(result) {
    console.log("result: ", result);
});

let funcName = (params) => params + 2

let result = funcName(2);

console.log("result", result);