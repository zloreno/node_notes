// Still no multi-thread
const p1 = new Promise((resolve) => {
	setTimeout(() => {
		console.log('Async operation 1');
		resolve(1);
	}, 2000);
});

const p2 = new Promise((resolve) => {
	setTimeout(() => {
		console.log('Async operation 2');
		resolve(2);
	}, 2000);
});

const r1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Async operation 3');
		reject(new Error('Something failed'));
	}, 2000);
});

// When all the promises above are resolved, to X
// The promises in the array are started simulateously
Promise.all([p1, p2]).then((result) => console.log(result));

// If you also want to catch errors
Promise.all([r1, p1])
	.then((result) => console.log(result))
	.catch((err) => console.log('Error: ', err.message));

// If you wanto to perform an action
//as soon as the first promise is completed
Promise.race([p1, p2])
	.then((result) => console.log(result))
	.catch((err) => console.log('Error: ', err.message));
