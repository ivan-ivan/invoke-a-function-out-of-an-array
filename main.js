function execFunctions(arrOfFunctions) {
	var resArr = [];
	for(var i = 0; i < arrOfFunctions.length; i++) {
		resArr.push(arrOfFunctions[i]());
	}
	
	return resArr;
}