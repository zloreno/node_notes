function getUser(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Reading a user from a database...');
			resolve({ id: id, gitHubUsername: 'lollo' });
		}, 1000); // 2 seconds
	});
}

function getRepos(username) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Getting the repos from GitHub API...');
			resolve(['repo1', 'repo2', 'repo3']);
		}, 1000); // 2 seconds
	});
}

function getCommits(repo) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Getting commits from repos');
			resolve({ repo: repo, commit: ['commit1', 'commit2', 'commit3'] });
		}, 1000);
	});
}

getUser(1)
	.then((user) => getRepos(user))
	.then((repos) => getCommits(repos))
	.then((user) => console.log(user))
	.catch((err) => console.log('Error: ', err.message));
