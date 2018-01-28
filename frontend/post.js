function sendData(data) {
  var XHR = new XMLHttpRequest();
  var urlEncodedData = "Hi";
  var urlEncodedDataPairs = [];
  var name;

  // Turn the data object into an array of URL-encoded key/value pairs.
  for(name in data) {
    urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
  }

  // Combine the pairs into a single string and replace all %-encoded spaces to 
  // the '+' character; matches the behaviour of browser form submissions.
  urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

  // Define what happens on successful data submission
  XHR.addEventListener('load', function(event) {
    alert('Yeah! Data sent and response loaded.');
  });

  // Define what happens in case of error
  XHR.addEventListener('error', function(event) {
    alert('Oups! Something shitty happened.');
  });

  // Set up our request
  XHR.open('POST', 'http://home.nielmistry.me:1337');

  // Add the required HTTP header for form data POST requests
  XHR.setRequestHeader('Content-Type', 'text/plain');

  // Finally, send our data.
  XHR.send(urlEncodedData);

}