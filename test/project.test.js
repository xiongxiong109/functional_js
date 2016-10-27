"use strict";

const expect = require('chai').expect;
const project = require('../funcs/project');
const _ = require('underscore');

describe('test for project', () => {

	let table, keyArr;

	beforeEach(() => {
		table = [
			{ id: 0, uname: 'xiongxiong109', age: 20 },
			{ id: 1, uname: 'xiongxiong10', age: 15 },
			{ id: 2, uname: 'xiongxiong085', age: 23 },
			{ id: 3, uname: 'qiaoqiao', age: 32 }
		];
		keyArr = ['id', 'uname', 'age'];
	});

	it('should be empty when does not have the target properties', () => {
		_.each(project(table, ['xx']), (obj) => {
			expect(obj).to.be.empty;
		})
		_.each(project(table, ['xx', 'dd']), (obj) => {
			expect(obj).to.be.empty;
		})
	})

	it('should return the target obj when any of the property is matched', () => {
		_.each(keyArr, (key) => {
			let row = project(table, [key]);
			expect(row).to.be.an('array');
			_.each(_.range(row.length), (idx) => {
				expect(row).to.have.deep.property(`[${idx}].${key}`);
			});
		});
	})

})