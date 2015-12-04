var _=require('underscore');

/*利用sortedIndex、sortBy、each等方法实现test2中的插入数据操作*/
var rankData=
[{ name: 'tRdxG', age: 39 },
  { name: 'yaELW', age: 7 },
  { name: 'uSFfd', age: 17 },
  { name: 'eXKgr', age: 45 },
  { name: 'xDNna', age: 10 },
  { name: 'eDRjs', age: 24 }];
var baseLine={name:'房品君',age:18};

//通过sortedIndex查找插入索引
var insertIndex=
_.chain(rankData)
.sortBy('age')
.pluck('age')
.sortedIndex(baseLine.age)
.value();

console.log('当前数据为');
console.log(_.chain(rankData).sortBy('age').value());
console.log('应该在'+insertIndex+'处插入数据');


