// function getTempCallback(location, callback) {
// 	callback(undefined, 78);
// 	callback('City not found');
// }

// getTempCallback('London', function(err, temp) {
// 	if(err) {
// 		console.log('error', err);
// 	} else {
// 		console.log('success', temp);
// 	}
// });

// function getTempPromise(location) {
// 	return new Promise(function(resolve, reject) {
// 		setTimeout(function() {
// 			resolve(79);
// 			reject('city not found');
// 		}, 1000);
// 	});
// }

// getTempPromise('London').then(function(temp) {
// 	console.log('Promise success', temp);
// }, function(err) {
// 	console.log('promise error', err);
// });

//Challenge area
function addPromise(a,b) {
	return new Promise(function(resolve, reject) {
		if(typeof a === 'number' && typeof b === 'number') {
			resolve(a + b);
		} else if(typeof a === 'number' || typeof b === 'number') {
			reject('one is not a number');
		} else {
			reject('neither of these are numbers');
		}
	});
}

addPromise(2,4).then(function(hold) {
	console.log('success', hold);
}, function(err) {
	console.log('error', err);
});

addPromise(2,'string').then(function(hold) {
	console.log('success', hold);
}, function(err) {
	console.log('error', err);
});

addPromise('string','string').then(function(hold) {
	console.log('success', hold);
}, function(err) {
	console.log('error', err);
});