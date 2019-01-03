function duckCount(...args) {
	let count= 0;
	for (let i=0;i<args.length;i++) {
	  if(Object.prototype.hasOwnProperty.call(args[i], 'quack')){
	    count++;
	  }
	}
	return count;
}

module.exports = duckCount;
