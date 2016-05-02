var date,
	celebGroup,
	healthGroup,
	interGroup,
	poliGroup,
	sociGroup;

var id = 0;

var Timeline = new Timeline();
var Display = new Display(Timeline); 

for (var i = 0; i < timelineArray.length; i++) {
	id = timelineArray[i].id
	date = timelineArray[i].date + '';
	category = getCategory(timelineArray[i].category)
	title = timelineArray[i].title
	photos = timelineArray[i].photos
	description = timelineArray[i].description
	Timeline.addEvent(id, date, category, description, photos);
}

// Timeline.sortEvents(Timeline.getArray(), 0, Timeline.numOfEvents()-1);

Display.drawContainer();
Display.drawEventViewer();
Display.drawSegment();
Display.drawEvents(Timeline.firstEvent()); 

function getCategory(string) {
	if (string == 'International Information')
		return 'international';
	else if (string == 'Political Events')
		return 'political';
	else if (string == 'Public Health and Medicine')
		return 'health';
	else if (string == 'Social Activism')
		return 'social';
	else if (string == 'Celebrities and AIDS')
		return 'celebrity';
}