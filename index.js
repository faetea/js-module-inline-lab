'use strict';

var ourModule = (function (initialValue) {
	var a = initialValue;
	function addOne() {
		return a++;
	};
	return addOne;
})(3); // 3 is the initialValue here


for(var index=0; index < 10; index++) {
	var messageToBeLogged = ourModule();
	console.log(messageToBeLogged);
}
