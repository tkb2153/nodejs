//http://fred-zone.blogspot.tw/2012/10/nodejs-javascript-array.html
//http://www.ithome.com.tw/node/82486
var i1 = 0,
	s1 = 10,
	i2 = 0,
	s2 = 10;
var readLoop1 = function () {
	while(i1 < s1) {
		console.log(i1++);
	};
}
var readLoop2 = function () {
	while(i2 < s2) {
		console.log(i2++);
	};
}
readLoop1();
console.log('ex1 the end');


console.log('--------------------------------');


process.nextTick(readLoop2);
console.log('ex2 the end');
