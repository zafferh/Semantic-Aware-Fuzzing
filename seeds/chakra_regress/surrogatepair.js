//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// This test cases test if a string that is UTF-8 encoded string with surrogate code units encoded as 3 bytes UTF8 characters prints correctly or not.
// For this test case to work, please save this file with UTF-8 encoding
var y = "function () { 'চ𐌲𐌿𐍄𐌹𐍃𐌺নির্বাচিত নিবন্ধ।' ;WScript.Echo('hello'); }"
var x = function () { 'চ𐌲𐌿𐍄𐌹𐍃𐌺নির্বাচিত নিবন্ধ।' ;WScript.Echo('hello'); }

// 2 bytes 
var y2 = "function () { 'üç kuğu' ;WScript.Echo('hello'); }" 
var x2 = function () { 'üç kuğu' ;WScript.Echo('hello'); } 

WScript.Echo((x.toString() === y && x2.toString() === y2) ? "PASS" : "FAIL");