# Node-js-backend-with-express-
Read the following systematically to better understand it unlike the way you would read code=====>

This todo list program has two components-> an HTML page that sends requests to a node backend server. The backend server gives responses with the todo elements that it stores in its variables. This project has limited functionality because the sole purpose of making it was to better understand how the frontend talks to the backend.

When the html page(frontend) is loaded--->, we get back a response from the backend(res.send(list of {val:<todo item>}) written in the nodejs backend server) which is an object that consists of not just the default list of todo items that is sent from the backend but metadata too. <.json()> helps in extracting the list from the metadata and it is displayed on the html frontend at the end of this sequence changing the value of innerHTML of the div element with a particular id.



When a button is pressed to add an element to the todo list the following sequence is performed--> the frontend sends a fetch request to the backend with POST as method, a string version of an object with input box element(desired element) as body and `{ "Content-Type": "application/json" }` as header to convey to the backend that the body is an object converted to a string. The response from the backend is recorded and displayed in the same way as the one in the first sequence.
