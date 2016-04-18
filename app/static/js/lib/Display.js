// Display Class, for displaying the timeline. 

function Display(TimelineObject, optionsObject) {

	this.setOptions = function() {
		if (optionsObject == undefined)
			return new DisplayOptions();
		else
			return optionsObject; 
	}

	this.displayOptions = this.setOptions(); 

	this.container = '#timeline-container';

	this.eventViewContainer = '#event-viewer-container'; 

	this.timelineObject = TimelineObject;
	
	this.drawContainer = function() {
		var newElement; 
		var styles = {
	      width: this.displayOptions.width,
	      height: this.displayOptions.height
	    };

	    this.container = $(this.container).append('<div id="timeline"></div>');
	    newElement = $('#timeline');
		newElement.css(styles);
	}

	this.drawEventViewer = function() {
		var newElement; 
		var styles = {
	      width: this.displayOptions.eventViewWidth,
	      height: this.displayOptions.eventViewHeight
	    };

	    this.eventViewContainer = $(this.eventViewContainer).append('<div id="event-viewer"></div>');
	    newElement = $('#event-viewer');
		newElement.css(styles);
	}


	this.drawSegment = function() {
		$('#timeline').append('<hr>');
	}

	this.drawEvent = function() {
		// Draw an event on a segment
	}

	this.nextSegment = function() {

	}

	this.prevSegment = function() {

	}

	function DisplayOptions() {
		this.width = '100%';
		this.height = '50px';
		this.eventViewWidth = '100%';
		this.eventViewHeight = '400px';
		this.segmentLength = 10; 
	}

}

