'use strict';
const common = require('../../common');
// test.js
const addon = require(`./build/${common.buildType}/addon`);

const obj1 = addon.createObject(10);
const obj2 = addon.createObject(20);
const result = addon.add(obj1, obj2);

console.log(result);
// Prints: 30
