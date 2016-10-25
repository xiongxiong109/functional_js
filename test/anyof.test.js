"use strict";

var expect = require('chai').expect;
var anyOf = require('../funcs/anyof');

function T () {
	return true;
}
function F () {
	return false;
}

describe('test for anyof func', () => {

	it('should be false when has no argument', () => {
		expect(anyOf()).to.be.false;
	});

	it('should be false when all of false', () => {
		expect(anyOf(F,F,F)).to.be.false;
	});

	it('should be true when all of true', () => {
		expect(anyOf(T, T)).to.be.true;
	});

	it('should be true when any of true', () => {
		expect(anyOf(T, F, T)).to.be.true;
	});

});