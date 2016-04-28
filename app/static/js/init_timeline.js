var date,
	celebGroup,
	healthGroup,
	interGroup,
	poliGroup,
	sociGroup;

var Timeline = new Timeline();
var Display = new Display(Timeline); 

for (var i = 0; i < timelineArray.length; i++) {
	date = timelineArray[i].year + '';  
	for (var key in timelineArray[i]) {
		if (key != 'year' && key != 'id') {
			if (key == 'celebrity')
				Timeline.addEvent(date, key, timelineArray[i][key]);
			else if (key == 'health')
				Timeline.addEvent(date, key, timelineArray[i][key]);
			else if (key == 'international')
				Timeline.addEvent(date, key, timelineArray[i][key]);
			else if (key == 'political')
				Timeline.addEvent(date, key, timelineArray[i][key]);
			else if (key == 'social')
				Timeline.addEvent(date, key, timelineArray[i][key]);
		}

	}

}

Timeline.sortEvents(Timeline.getArray(), 0, Timeline.numOfEvents()-1);

Display.drawContainer();
Display.drawEventViewer();
Display.drawSegment();
Display.drawEvents(); 