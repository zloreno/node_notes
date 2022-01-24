// It's messy, but it's better this way (?)
console.log('Before');
getUser(1, showUser);
console.log('After');

// Get the user with the given ID
function getUser(id, callback) {
	setTimeout(() => {
		console.log('Reading a user from a database...');
		callback({ id: id, gitHubUsername: 'lollo' });
	}, 1000); // 2 seconds
}

// Get their repos
function getRepos(username, callback) {
	setTimeout(() => {
		console.log('Getting the repos from GitHub API...');
		callback(['repo1', 'repo2', 'repo3']);
	}, 1000); // 2 seconds
}

// Get their commits (to the relevant repo)
function getCommits(repo, callback) {
	setTimeout(() => {
		console.log('Getting commits from repos');
		callback([repo, 'commit1', 'commit2', 'commit3']);
	}, 1000);
}

// Show the commits that you obtained
function showCommits(params) {
	let [repo, ...commits] = params;
	console.log({ repo: repo, commit: commits });
}

// Show the repo from which you are obtaining the commits
function showRepos(repos) {
	console.log('Repos: ', repos);
	for (let i = 0; i < repos.length; i++) {
		getCommits(repos[i], showCommits);
	}
}

// Show theuser whose repos you are studying
function showUser(user) {
	console.log('User: ', user);
	getRepos(user.gitHubUsername, showRepos);
}
