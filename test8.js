/*underscore 函数相关*/

/*
partial
*/
var _=require('underscore');

var add=function(a,b){
	return a+b;
}
var sub=function(a,b){
	return a-b;
}
var add5=_.partial(add,5);
console.log( add5(10) );//15
console.log( _.partial(sub,5)(10) ); //-5
