// very primitive timeline practice
// subject to a lot of change

var timelineContainer = document.getElementById('timelinevis');
var graphContainer = document.getElementById('graphvis');

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet(timelineArray);

  // Configuration for the Timeline
  var timelineOptions = {
    height: '500px',
    min: new Date(1975, 1, 1), // lower limit
    max: new Date(2020, 12, 31), // upper limit
    moveable: true, 
    zoomable: false,
    // zoomMin: 1000 * 60 * 60 * 24 * 3, // one day in milliseconds
    // zoomMax: 1000 * 60 * 60 * 24 * 31 // 24 months in milliseconds
  };

  var graphOptions = {
    height: '500px',
    min: new Date(1975, 1, 1), // lower limit
    max: new Date(2020, 12, 31), // upper limit
    moveable: true, 
    zoomable: false,
    // zoomMin: 1000 * 60 * 60 * 24 * 3, // one day in milliseconds
    // zoomMax: 1000 * 60 * 60 * 24 * 31 // 24 months in milliseconds
  };

  // Create a Timeline
  var timeline = new vis.Timeline(timelineContainer, items, timelineOptions);
  var graph = new vis.Graph2d(graphContainer, items, graphOptions);
