// var names = ['kevin','luke','luca'];

// // names.forEach(function(name) {
// // 	console.log('forEach', name);
// // });

// // names.forEach((name) => {
// // 	console.log('arrow func', name);
// // });

// // names.forEach((name) => console.log(name));

// // var returnMe = (name) => name+'!';
// // console.log(returnMe('kevin'));


// var person = {
// 	name: 'Kevin',
// 	greet: function() {
// 		names.forEach((name) => {
// 			console.log(this.name + ' says hi to '+name);
// 		});
// 	}
// };

// person.greet();

//challenge area
function add(a,b) {
	return a + b;
}

var addStatement = (a,b) => {
	return a+b;
}
console.log(addStatement(4,7));

var addExpression = (a,b) => a+b;
console.log(addExpression(3,-2));

console.log(add(1,3));
console.log(add(9,0));