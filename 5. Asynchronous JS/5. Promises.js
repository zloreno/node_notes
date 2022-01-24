// A promise is an object that contains the result
// of an asychronous operation and contains either
// the result or an error

// It can be in 3 states
// 1. pending -> ._.
// 2. Fulfilled
// 3. Rejected

const p = new Promise((resolve, reject) => {
	console.log('Perform some async work...');
	// resolve and rejects are functions
	setTimeout(() => {
		const resultOfTheAsyncOperations = 1;
		reject(new Error('message')); // pending -> rejected
		resolve(resultOfTheAsyncOperations); // pending -> fulfilled
	}, 2000);
});

// p.catch; // To catch any error
// p.then; // To get the result of the async operation

p.then((result) => console.log(result)).catch((err) =>
	console.log('Error', err.message)
);
