/*
使用_.range([start], stop, [step])方法来创建一个数组，可以利用该数组来方便地使用each和map方法
*/
var _=require('underscore');
console.log(createLetter(5));
// 创建随机字符串函数
// num为字符串长度
function createLetter(num){
	if(_.isNumber(num) && num>0 ){
		var letterArr=_.range(65,90).concat(_.range(97,122));
		var strArr=[];
		_.each(_.sample(letterArr,num),function(code){
			strArr+=''+String.fromCharCode(code);
		});
		return strArr;
	}
}
