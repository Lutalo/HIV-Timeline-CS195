var date,
	celebGroup,
	healthGroup,
	interGroup,
	poliGroup,
	sociGroup;

var Timeline = new Timeline();
var Display = new Display(Timeline); 

celebGroup = new Events('celebrity');
healthGroup = new Events('health');
interGroup = new Events('international');
poliGroup = new Events('political');
sociGroup = new Events('social');

for (var i = 0; i < timelineArray.length; i++) {
	date = timelineArray[i].year + '';  
	for (var key in timelineArray[i]) {
		if (key != 'year' && key != 'id') {
			if (key == 'celebrity')
				celebGroup.addEvent(date, key, timelineArray[i][key]);
			else if (key == 'health')
				healthGroup.addEvent(date, key, timelineArray[i][key]);
			else if (key == 'international')
				interGroup.addEvent(date, key, timelineArray[i][key]);
			else if (key == 'political')
				poliGroup.addEvent(date, key, timelineArray[i][key]);
			else if (key == 'social')
				sociGroup.addEvent(date, key, timelineArray[i][key]);
		}

	}

}

Timeline.addEventsGroup(celebGroup);
Timeline.addEventsGroup(healthGroup);
Timeline.addEventsGroup(interGroup);
Timeline.addEventsGroup(poliGroup);
Timeline.addEventsGroup(sociGroup);
Timeline.sortEvents(Timeline.getArray(), 0, Timeline.numOfEvents()-1);

Display.drawContainer();
Display.drawEventViewer();
Display.drawSegment();
Display.drawEvent(); 