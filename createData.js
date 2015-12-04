/*
为方便测试所编写的生成随机对象数组函数
*/
/*
创建随机的对象数组
生成形如
[{name:'xiong',age:21}]
name由[a-zA-Z]的1-5个随机字母组成
age则由5-50的随机整数组成
@num:生成的子对象的个数
的对象数组
*/
var _=require('underscore');

function createObjArr(num){
	var arr=[];
	_.each(_.range(num),function(){
		arr.push({
			name:createLetter( _.random(1,num) ),
			age:_.random(5,50)
		});
	})
	return _.shuffle(arr);//随机打乱数组
}

// 创建随机字符串函数
// num为字符串长度
/*ASCII码范围
	A-Z:65-90
	a-z:97-122
*/
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

module.exports=createObjArr;