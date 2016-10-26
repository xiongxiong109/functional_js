"use strict";
const _ = require('lodash');
const expect = require('chai').expect;
const existy = require('../funcs/existy');

describe('test for func existy', () => {

	it('should be false when has no argument', () => {
		expect(existy()).to.be.false;
	})

	it('should be true when has an argument of obj, number, string, boolean etcs', () => {

		let arr = [Math.random(), 'String', {}, true, false, function() {}];
		_.map(arr, (arg) => {
			expect(existy(arg)).to.be.true
		})

	});

	it('should be false when the argument is null or undefined', () => {

		expect(existy(undefined)).to.be.false;
		expect(existy(null)).to.equal(existy(undefined));

	});

});