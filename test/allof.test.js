"use strict";

var expect = require('chai').expect;
var allOf = require('../funcs/allof');

function T () {
	return true;
}
function F () {
	return false;
}

describe('test for allof func', () => {

	it('should be false when all of false', () => {
		expect(allOf(F,F,F)).to.be.false;
	});

	it('should be true when all of true', () => {
		expect(allOf(T, T)).to.be.true;
	});

	it('should be false when any of false', () => {
		expect(allOf(T, F, T)).to.be.false;
	});

});