/*
Client and Server separation of the application
Client -> frontend
Server -> backend
Communication between the two happens via the HTTP protocol

REST = Representational State Transfer 

Use the HTTP protocol to provide support to create, read, update, and delete (CRUD) data 

The type of HTTP request allows for a different action
HTTP methods:
1. Get -> read
    Request: send me the list of customers
    -> GET /api/customers
    Response:
    [{id : 1, name : '....' },
     {id : 2, name : '....'}, 
     {id : 3, name : '...' }]

    Request: send me one individual customer
    -> GET /api/customers/id_of_the_customer
    Response:
    [{id : id_of_the_customer, name : '...' }]
2. Post -> create
    Request: create new customer
    POST /api/customers {name : 'luca'}

3. Put -> update
    Request: update user 1 to have name = jape
    -> PUT /api/customers/1 {name : 'jape'}
    Response:
    {id : 1, name : 'jape'}

4. Delete -> ._."
    Request: delete user 1
    DELETE /api/customer/1

*/
