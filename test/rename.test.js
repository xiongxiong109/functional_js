// test for rename
"use strict";

const expect = require('chai').expect;
const rename = require('../funcs/rename');

describe('test for rename', () => {

	let json;

	beforeEach(() => {
		json = {
			'stnnm': 'xiongxiong109',
			'stncd': 321123,
			'stnadt': '航班',
			'stnddt': 'ddt',
			'stnno': 'sdfsdf',
			'stnsubcd': 'sdfsdf',
			'stntype': 'sdfsdf',
		}
	})

	it('should keep normal when matches nothing', () => {
		expect(rename(json, {})).to.have.all.keys('stnnm', 'stncd', 'stnadt', 'stnddt', 'stnno', 'stnsubcd', 'stntype');
	})

	it('should replace the old key with the target one, and keeps the value unchanged', () => {
		let filterObj = rename(json, {
				'stnnm': 'newName',
				'stncd': 'hangban'
		});
		expect(filterObj).to.not.have.keys('stnnm', 'stncd');
		expect(filterObj).to.contain.all.keys('newName', 'hangban');
	})

});