"use strict";
var expect = require('chai').expect;
var _ = require('lodash');
var interpose = require('../funcs/mapcat').interpose;

describe('test for interpose func', () => {
	let arr, interposedArr;

	beforeEach(() => {
		arr = [1, 2, 3, 4, 5];
		interposedArr = interpose('&', arr)
	})

	it('should change the array\'s length ', () => {
		expect(interposedArr.length).to.equal(arr.length * 2 - 1);
	});

	it('should append the target tag to every next item', () => {

		_.each(interposedArr, (item, idx) => {
			let expectIdx = idx % 2 ? idx: Math.min(idx + 1, interposedArr.length - 2);
			if (expectIdx === idx) {
				expect(item).to.equal('&')
			} else {
				expect(item).to.be.a('number')
			}
		});

	});

})