// test for checker;
"use strict";
const expect = require('chai').expect;
const _ = require('underscore');

const checker = require('../funcs/checker').checker;
const validator = require('../funcs/checker').validator;

describe('test for checker funcs', () => {
	let emptyChecker, numberChecker, lengthChecker;

	beforeEach(() => {
		emptyChecker =  validator('不能为空', v => {
			return !_.isEmpty(v);
		});

		numberChecker = validator('必须为字符串', v => {
			return _.isString(v);
		});

		lengthChecker = validator('长度至少为8位', v => {
			return v && v.length >= 8;
		});
	});

	it('should return the target message when the validator is matched', () => {

		let emCheck = checker(emptyChecker);
		let nmCheck = checker(numberChecker);
		let lenCheck = checker(lengthChecker);
		expect(emCheck('')).to.include('不能为空');
		expect(nmCheck(123)).to.include('必须为字符串');
		expect(lenCheck('dsss123')).to.include('长度至少为8位');

	});

	it('should return an empty array when all validator is passed', () => {
		let uCheck = checker(emptyChecker, numberChecker, lengthChecker);
		expect(uCheck('hell world')).to.be.empty;
	});

	it('should return all the messages when nothing matched', () => {
		let uCheck = checker(emptyChecker, numberChecker, lengthChecker);
		// deep eql
		expect(uCheck(123)).to.eql(['不能为空', '必须为字符串', '长度至少为8位']);
	});

})