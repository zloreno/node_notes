console.log('Before');
getUser(1, (user) => {
	console.log('User: ', user);
	getRepos(user.gitHubUsername, (repos) => {
		console.log('Repos: ', repos);
	});
});
console.log('After');

function getUser(id, callback) {
	setTimeout(() => {
		console.log('Reading a user from a database...');
		callback({ id: id, gitHubUsername: 'lollo' });
	}, 2000); // 2 seconds
}

function getRepos(username, callback) {
	setTimeout(() => {
		console.log('Getting the repos from GitHub API...');
		callback(['repo1', 'repo2', 'repo3']);
	}, 2000); // 2 seconds
}

// So how can we obtain the data that we need then?
// Callbacks
// Promises
// Async/await
