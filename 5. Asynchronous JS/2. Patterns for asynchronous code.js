console.log('Before');
const user = getUser(1);
// what the function returns will not be available when
// console.log is called
console.log(user);
console.log('After');

function getUser(id) {
	setTimeout(() => {
		console.log('Reading a user from a database...');
		return { id: id, gitHubUsername: 'lollo' };
	}, 2000); // 2 seconds

	return 1;
}

// So how can we obtain the data that we need then?
// Callbacks
// Promises
// Async/await
