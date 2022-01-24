// setTimeout is an asyncronous non-blocking function
// schedules a task for the future
// here there is no multi-threading, there is NOT concurrency

// Second line needs to wait for the first to run
console.log('Before');
setTimeout(() => {
	console.log('Reading a user from a database...');
}, 2000); // 2 seconds
console.log('After');

// Output order:
// Before
// After
// Reading....
