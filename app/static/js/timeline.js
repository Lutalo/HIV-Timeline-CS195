// very primitive timeline practice
// subject to a lot of change

var container = document.getElementById('visualization');

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet(timelineArray);

  // Configuration for the Timeline
  var options = {
    height: '500px',
    min: new Date(1975, 1, 1), // lower limit
    max: new Date(2020, 12, 31), // upper limit
    // zoomMin: 1000 * 60 * 60 * 24 * 3, // one day in milliseconds
    // zoomMax: 1000 * 60 * 60 * 24 * 31 // 24 months in milliseconds
  };

  // Create a Timeline
  var timeline = new vis.Timeline(container, items, options);
