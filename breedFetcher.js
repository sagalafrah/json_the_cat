const request = require('request'); // Use the request module to send a GET request to the  API
const url = "https://api.thecatapi.com/v1/breeds/search?q=" + process.argv[2]; // This code takes the second argument passed to the node command & returns the second argument passed to the node command

request(url, (error, response, body) => { //creates a new request to the server
  

  if (error) {
    console.log("Request failed");
  } else {
    const data = JSON.parse(body); // It then parses the response from the server
    if (data[0] === undefined) {
      console.log("No cat exists");
    } else {
      console.log(data[0].description);  //If the response is successful, it then logs the description of the cat to the console
    }
    
  }
});