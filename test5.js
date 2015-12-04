var _=require('underscore');
//使用sortedIndex直接在对象中通过属性排序查找插入索引
var rankData=
[{ name: 'xDNna', age: 10 },
{ name: 'eDRjs', age: 24 },
{ name: 'vuktj', age: 34 },
{ name: 'PAyWl', age: 11 },
{ name: 'tgcNT', age: 31 }];
var baseLine={name:'房品君',age:15};

var insertIndex=
_.chain(rankData)
.sortBy('age')
.sortedIndex(baseLine,'age')
.value();

var newData=
_.chain(rankData)
.sortBy('age')
.value();

//利用数组的原生方法插入操作
newData.splice(insertIndex,0,baseLine);

console.log('original data');
console.log(rankData);
console.log('sorted and inserted data');
console.log(newData);