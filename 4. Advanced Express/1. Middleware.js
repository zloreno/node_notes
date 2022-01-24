// The middleware is basically a function that takes a request object and
// either returns a response to the client,
// or passes the object to another middleware function

// EXAMPLES:
// 1. Every function that we have as second argument
// to app.get/post/put/delete (as they terminate the request-response cycle)
// 2. app.use(express.json())
//      -> reads the request and
//         if there is a JSON file in the body of the request,
//         parses it into a JSON object and sets the req.body property
