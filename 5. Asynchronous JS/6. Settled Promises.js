// Creating a promise that is already resolved

const p = Promise.resolve({ id: 1 });
p.then((result) => console.log(result));

const e = Promise.reject(new Error('The reason why it failed is...'));
e.catch((result) => console.log(result));
