console.log('loading script...');

// Create map variable
var map;

// List of locations to put on the map
var locations = [
	{ title: 'Scorpion and Cricket', location: { lat: 33.283526, lng: -116.369940 }},
	{ title: 'The Sea Dragon', location: { lat: 33.290006, lng: -116.376930 }},
	{ title: 'Gomphothoreums', location: { lat: 33.282958, lng: -116.373860 }},
	{ title: 'The Jeep', location: { lat: 33.300242, lng: -116.387266 }},
	{ title: 'Camels', location: { lat: 33.284914, lng: -116.374939 }},
	{ title: 'Bucking Broncos', location: { lat: 33.212088, lng: -116.350410 }},
	{ title: 'Fighting Broncos', location: { lat: 33.211751, lng: -116.352732 }},
	{ title: 'The Eagle', location: { lat: 33.212561, lng: -116.355707 }},
	{ title: 'Elephants', location: { lat: 33.298918, lng: -116.384375 }}
];

// Create new blank array for all the listing markers
var markers = []; 

function initMap() {
	console.log(locations[0].location);
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: locations[0].location
	});

	var largeInfowindow = new google.maps.InfoWindow();
	// var bounds = new google.maps.LatLngBounds();

	// Create array of markers on initialize
	for (var i = 0; i < locations.length; i++ ) {
		// get location and title for each location in array
		var position = locations[i].location;
		var title = locations[i].title;

		// create a new marker for each location and push to the markers array
		var marker = new google.maps.Marker({
			// To hide map listenings, map parameter is removed 
			// marker parameters	
			// map: map,
			position: position,
			title: title, 
			animation: google.maps.Animation.DROP,
			id: i
		});

		// Push the marker to the array of markers
		markers.push(marker);

		// Extend the boundaries of the map for each marker
		// bounds.extend(marker.position);

		// Create an onclick even to open an infowindow at each marker
		marker.addListener('click', function() {
			populateInfoWindow(this, largeInfowindow);
		});
	}

	// After all bounds have been added, call fitBounds to fit map to all markers
	// Hide fitBounds to hide all marker locations
	// map.fitBounds(bounds);

	document.getElementById('show-listing').addEventListener('click', showListings);
	document.getElementById('hide-listing').addEventListener('click', hideListings);

	// this function populates the infowindow when a specific marker is clicked.
	// Only allow one infowindow which will open at the marker that is clicked,
	// and populate based on that markers position
	function populateInfoWindow(marker, infowindow) {
		// check to make sure that the infowindow is not already opened on this marker
		if (infowindow.marker != marker) {
			infowindow.marker = marker;
			infowindow.setContent('<div>' + marker.title + '</div>');
			infowindow.open(map, marker);

			// Clear the marker property when the infowindow is closed
			infowindow.addListener('closeclick', function() {
				infowindow.marker = null;
				// infowindow.setContent(null);
				console.log(infowindow.marker);
			});
		}
	};
	
	function showListings() {
		console.log('showListing');
		var bounds = new google.maps.LatLngBounds();

		for (var i = 0 ; i < markers.length; i++ ) {
			markers[i].setMap(map);
			bounds.extend(markers[i].position);
		}
		map.fitBounds(bounds);
	};

	function hideListings() {
		console.log('hideListing');
		for (var i = 0; i < markers.length; i++ ) {
			markers[i].setMap(null);
		}
	};
};



// TODO: Create a map variable


// TODO: Complete the following function to initialize the map
// TODO: use a constructor to create a new map JS object. You can use the coordinates
// we used, 40.7413549, -73.99802439999996 or your own!
// function initMapOld() {
// 	var laJolla = { lat: 32.847827, lng: -117.278623 };
// 	map = new google.maps.Map(document.getElementById('map'), {
// 		zoom: 18,
// 		center: laJolla
// 	});

// 	var marker = new google.maps.Marker({
// 			position: laJolla,
// 			map: map,
// 			title: 'La Jolla Childrens Pool'
// 	});

// 	var infowindow = new google.maps.InfoWindow({
// 	content: 'Do you ever feel like an InfoWindow, floating through the wind, ' + 
// 	' ready to start again?'
// 	});

// 	marker.addListener('click', function() {
// 		infowindow.open(map, marker);
// 	});
// };

// var map;
