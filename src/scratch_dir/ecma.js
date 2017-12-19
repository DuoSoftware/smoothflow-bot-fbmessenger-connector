'use strict';
// Sets server port and logs message on success
let gg = 4;
console.warn(gg);
var array = [11, 22];
//var ss = array.map((no) => {return no*5;} );
console.log(array);
//get total
console.log(array.reduce((cum, element) => cum+element,0));
console.log("------------------------------")

var ddarr = [1, 2, 3];
var hh = ddarr.reduce(function (cum, item) {
    cum["no"+item]=item*2;
    return cum;
}, {"nfjdslafdjslfo":555});

console.log(hh);
