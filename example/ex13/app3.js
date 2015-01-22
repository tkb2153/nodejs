var _getTime = function() {
	var newDate = new Date();
	var t = '';
	t += newDate.getFullYear();
	t += '-' + newDate.getMonth() + 1;
	t += '-' + newDate.getDate();
	t += ' ' + newDate.getHours();
	t += ':' + newDate.getMinutes();
	t += ':' + newDate.getSeconds();
	t += '.' + newDate.getMilliseconds();
	return t;
}
var readLoop1 = function (i) {
	var times = i * 1000;
	var t = '';
	var _firstTime = _getTime();
	setTimeout(function() {
		t = _getTime();
		t += ' -> ' + times;
		console.log(_firstTime + ' => ' + t);
	}, times);
	//return t;
}
var readLoop2 = function (i) {
	var times = i * 1000;
	var t = '';
	var _firstTime = _getTime();
	setTimeout(function() {
		t = _getTime();
		t += ' -> ' + times;
		console.log(_firstTime + ' => ' + t);
	}, times);
	//return t;
}
var readLoop3 = function (i) {
	var times = i * 1000;
	var t = '';
	var _firstTime = _getTime();
	setTimeout(function() {
		t = _getTime();
		t += ' -> ' + times;
		console.log(_firstTime + ' => ' + t);
	}, times);
	//return t;
}
var readLoop11 = function (i, callback) {
	if ( i != '' ) {
		console.log(i);
	} else {
		callback(i);
	}
}
/*
readLoop1(5);
readLoop1(3);
readLoop1(1);
console.log('ex1 the end');
*/

console.log('--------------------------------');


process.nextTick(readLoop11(5, function(result) {
	console.log(result);
}));
//process.nextTick(readLoop2(3));
//process.nextTick(readLoop3(1));
console.log('ex2 the end');
