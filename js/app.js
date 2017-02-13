
var mapDirectory = [
	{
		title: 'Map and Marker',
		url: 'mapandmarker.html'
	},
	{
		title: 'Map, Marker and an Infowindow',
		url: 'addinfowindow.html'
	},
	{
		title: 'Multiple Markers',
		url: 'multiplemarkers.html'
	},
	{
		title: 'Hide and Show Markers',
		url: 'hideshowmarkers.html'
	}
]

var ViewModel = function () {
	var self = this;

	this.mapList = ko.observableArray([]);

	mapDirectory.forEach(function(mapItem) {
		self.mapList.push(mapDirectory);
	})
}

ko.applyBindings( new ViewModel() );
