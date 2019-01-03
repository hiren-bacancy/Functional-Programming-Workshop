function countWords(inputArray) {
	return inputArray.reduce(function(obj,word){
	obj[word] =  ++obj[word] || 1;
	return obj;
	},{});
}

module.exports = countWords;
