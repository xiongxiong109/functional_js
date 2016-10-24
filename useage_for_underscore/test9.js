// 节流阀函数throttle
var _=require('underscore');
function updateData(){
	console.log(_.random(50,100));
}
/*创建并返回一个节流阀一样的函数*/
var throttle=_.throttle(updateData,100);
throttle();
throttle();