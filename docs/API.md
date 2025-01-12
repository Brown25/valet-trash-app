Instructions to add a new API endpoint
This should be useful for anyone who needs to add an endpoint in the future
 
Basic flow:
 Client sends request to microserver
Microserver instantiates appropriate java Request class, which builds and returns the response
Microserver sends response to client


Server-side
Define a JSON request schema
It should be named the same as the Request java class (ex: TestRequest.java -> TestRequest.json)
It should be in server/resources/schemas
It should include any properties that the  Request class will need to build a response. These properties have to be named exactly the same as the arguments in the Request class's constructor, and obviously carry the correct datatype

Define a java request class which accepts a request and builds a response.
This lives in server/main/java/com/tco/requests 
Its private variables will be passed as the response, so define those carefully
It should extend the Request class


It should define a constructor which takes arguments from the request, calls super(), sets requestType, and sets any private variables which don't rely on logic to be set
It should override the inherited buildResponse() function to set any private variables which are logic dependent (this can include database queries, calculation of moves, etc.)
Register the endpoint in the MicroServer class in server/src/main/java/com/tco/server/MicroServer.java
Import the Request class and add that route to the processRestfulAPIrequests() function, exact format as the others





Client-side
Define a JSON response schema
Name should be just like request schema but Response, for consistency sake
It should live in client/schemas


Its properties have to match the private attributes of the Request java class
Add the response to client/src/utils/restfulAPI.js
Import the schema and add the name-schema mapping to the SCHEMAS variable
Call the API from within the client


Import getOriginalServerUrl and sendAPIRequest from client/src/utils/restfulAPI.js
Declare const [serverUrl, seetServerUrl] = useState(getOriginalServerUrl()); and pass those down to whatever components will be calling the API


Declare request body as const requestBody = { requestType: "test", property: "value" }
Call API with const response = await sendAPIRequest(requestBody, serverURL)
response wil be false if an error occurred, which should be logged in the console or on the server terminal. If response is true, you can directly access its properties (ex: response.requestType, response.attributeOfRequestClass)
