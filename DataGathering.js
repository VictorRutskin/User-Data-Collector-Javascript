let DataOnUser =[];

//ip getter  
fetch('http://ip-api.com/json')
  .then(response => response.json())
  .then(data => {
    DataOnUser.push("IP Data: " + JSON.stringify(data));
  });


// Get language of the person visiting the website 
let language = navigator.language;
DataOnUser.push("Language: " + language);
// Get browser of the person visiting the website
let browser = navigator.userAgent;
DataOnUser.push("Browser: " + browser);

// Get operating system of the person visiting the website 
let os = navigator.platform;
DataOnUser.push("Operating System: " + os);

// Get referrer of the person visiting the website // EMPTY DATA = WORKS OR?? (NEED TO TEST)
let referrer = document.referrer;
DataOnUser.push("Reffering Website: " + referrer);

// Get time of visit 
let time = new Date();
DataOnUser.push("Visit Time: " + time);

// Get screen resolution 
let screenResolution = `${screen.width}x${screen.height}`;
DataOnUser.push("Screen Resolution: " + screenResolution);

// Get geolocation  //DOESNT WORK?
navigator.geolocation.getCurrentPosition(function(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  DataOnUser.push(latitude);
  DataOnUser.push(longitude);
});

// Get Cookies
let cookies = document.cookie;
DataOnUser.push("Cookies: " + cookies);

// Get request method
let method = 'GET';
DataOnUser.push("Method: " + method);

// Get request path
let path = window.location.pathname;
DataOnUser.push("Request Path: " + path);

// Get request parameters
let parameters = window.location.search;
DataOnUser.push("Request Parameters: " + parameters);

console.log(DataOnUser);