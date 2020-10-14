console.log("Connected");

//**printReverse

function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}

a = [3,6,2,5];
printReverse(a);

//**isUniform

function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== first){
			return false;
		}
	}
	return true;
}

//**sumArray
function sumArray(arr){
	var result = 0;
	for(var i = 0; i < arr.length; i++){
		result += arr[i];
	}
	return result;
	console.log(result);
}

//**max()
function max(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > max){
			var max = arr[i];
		}
	}
	return max;
}

//**myForEach
function myForEach(arr, func){
	//loop through array
	for(var i = 0; i < arr.length; i++){
	//call func for each item in the array
	func(arr[i]);
	}
}

Array.prototype.myForEach = function(func){
	for(var i = 0; i < this.length; i++){
	func(this[i]);
}


//var friends = ["Abbey", "Mike", "Bravo"];
//friends.myForEach(alert);