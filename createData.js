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
	/*ASCII码范围
		A-Z:65-90
		a-z:97-122
	*/
	var arr=[],codeArr=[];
	for(var i=65;i<=90;i++){
		codeArr.push(i);
	}
	for(var i=97;i<122;i++){
		codeArr.push(i);
	}
	for(var i=0;i<num;i++){
		arr.push({
			name:(function(){
				var str='';
				for(var i=0;i<5;i++){
					str+=String.fromCharCode(_.sample(_.shuffle(codeArr)));
				}
				return str;
			})(),
			age:_.random(5,50)
		});
	}
	return _.shuffle(arr);//随机打乱数组
}

module.exports=createObjArr;