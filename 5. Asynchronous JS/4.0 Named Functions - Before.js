console.log('Before');

getUser(1, (user) => {
	console.log('User: ', user);
	getRepos(user.gitHubUsername, (repos) => {
		console.log('Repos: ', repos);
		for (let i = 0; i < repos.length; i++) {
			getCommits(repos[i], (info) => {
				console.log('Relevant info: ', info);
			});
		}
	});
});
console.log('After');

function getUser(id, callback) {
	setTimeout(() => {
		console.log('Reading a user from a database...');
		callback({ id: id, gitHubUsername: 'lollo' });
	}, 1000); // 2 seconds
}

function getRepos(username, callback) {
	setTimeout(() => {
		console.log('Getting the repos from GitHub API...');
		callback(['repo1', 'repo2', 'repo3']);
	}, 1000); // 2 seconds
}

function getCommits(repo, callback) {
	setTimeout(() => {
		console.log('Getting commits from repos');
		callback({ repo: repo, commit: ['commit1', 'commit2', 'commit3'] });
	}, 1000);
}
