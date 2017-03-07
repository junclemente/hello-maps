# Exploring the Google Maps Javascript API

In this repository, I am exploring the Google Maps Javascript API. Each HTML page can be used on its own. The index.html page is only used as a "Table of Contents".

## Get Your Own API

To be able to use Google's Javascript API, you must use your own API. 
You can get your own here: [https://developers.google.com/maps/documentation/javascript/get-api-key](https://developers.google.com/maps/documentation/javascript/get-api-key "Get API Key")

## How To Use

Other then the index.html page, at the bottom of each HTML page, I added a call to `mapkey.js` to protect my API Key. 

To be able to view each page in a browser, you must first clone or download the repository. 
Then, you have two options:
* First Option: Remove the following line from the bottom of the html page: 
`<script src="js/mapkey.js"></script>`
and then add/unblock the following line and replace *YOUR_API_KEY* with the API key you received from Google:
`<script async defer src="https://https://maps.google.com/maps/api/js?key=YOUR_API_KEY></script>`

* Second Option: Create a `mapkey.js` file in the `js` folder and leave the HTML pages as is. Add the following code to the file:
```
if (typeof(google) == "undefined") {

    var mapsAPI = "YOUR_API_KEY";
    $.getScript('https://maps.googleapis.com/maps/api/js?v=3&libraries=drawing,geometry&callback=initMap&key=' + mapsAPI).done(function(){initMap()});
} else {
    console.log("google api already loaded");
}
```
Replace *YOUR_API_KEY* with the API key you received from Google.
The source for this script I used in `js/mapkey.js` was copied from [https://jsfiddle.net/user2314737/7cfpxpf7/](https://jsfiddle.net/user2314737/7cfpxpf7/ "JS Fiddle")


