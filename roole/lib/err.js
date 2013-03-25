/**
 * Err
 *
 * Thin wrapper around Error to add meta info to the error instance.
 */
'use strict';
/* exported Err */

var Err = module.exports = function(message, node, fileName) {
	var error = new Error(message);

	error.line = node.loc.line;
	error.column = node.loc.column;
	error.offset = node.loc.offset;
	error.fileName = fileName;

	return error;
};