/*
	@validators: 验证数组
*/
"use strict";

const _ = require('underscore');

function validator(msg, validate) {

	let f = (v) => {
		return validate.call(validate, v);
	}
	f['message'] = msg;
	return f;

}

function checker() {

	let validateArr = _.toArray(arguments);
	return (obj) => {
		return _.reduce(validateArr, (errs, checker) => {
			if (checker(obj)) {
				return errs;
			} else {
				return _.chain(errs).push(checker.message).value();
			}
		}, [])
	}

}


// let emptyChecker =  validator('不能为空', v => {
// 	return !_.isEmpty(v);
// });

// console.log(emptyChecker);  // {function, message: '不能为空'}
// let uChecker = checker(emptyChecker);
// let unameChecker = checker(emptyChecker, numberChecker, lengthChecker);

// console.log(unameChecker());
// console.log(_.isEmpty(' ')); // isEmpty 检测空字符串时返回的是true 0_0

module.exports = {checker, validator};