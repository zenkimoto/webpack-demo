import _ from 'lodash';
import $ from 'jquery';

import { number, incr, vivian } from "./library.js";

console.log(number);

incr();

console.log(number);

console.log(vivian);

console.log(vivian.full_name());

function component() {
    return $("<div/>").html(_.join(['Hello', 'webpack', 'Alex'], ' '));
}
  
$('body').append(component())

  
let p = new Promise(function(resolve, reject) {  
    resolve(1);
 });

p.then(function(result) {
    console.log("result: ", result);
    debugger;
    console.log("hi there...");
});

let funcName = (params) => params + 2

let result = funcName(2);

console.log("result", result);

