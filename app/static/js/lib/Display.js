// Display Class, for displaying the timeline. 

function Display(TimelineObject, optionsObject) {

	this.currentSegment = -1; 

	this.displayOptions = setOptions(); 

	this.container = this.displayOptions.container;

	this.timelineContiner = this.displayOptions.timelineContiner;

	this.eventViewContainer = this.displayOptions.eventViewContainer; 

	this.Timeline = TimelineObject;
	
	this.drawContainer = function() {
		var newElement; 
		var styles = {
	      width: this.displayOptions.width,
	      height: this.displayOptions.height
	    };

	    this.container = $(this.container).append('<div id="timeline"></div>');
	    newElement = $(this.timelineContiner);
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
		var vLine, lineRule; 
		var segmL = this.displayOptions.segmentLength
		var timeline = this.timelineObject; 
		var line = $(this.timelineContiner);
		var div = '<div class="vertical-line"></div>'
		var vLineStyles = {
			left: 0		
		};

		line.append('<hr>');

		for (var i = 0; i < segmL; i++) {
			vLine = line.append(div)
		}

		// container width divided by the..
		// segment length plus the width of a vertical line, 
		// minus the width of the vertical lines. 
		lineRule = (line.outerWidth() / (segmL + 1)) - 2.5;

		$.each($('#timeline div'), function() {
			vLineStyles.left = (vLineStyles.left + lineRule); 
			$(this).css(vLineStyles); 
		});
	}

	this.drawEvent = function() {
		var Event = this.Timeline.currentEvent();
		var eventElement;
		
		for (var i = 0; i < Timeline.numOfEvents(); i++) {
			eventElement = '<div class="' + Event.getType() + ' event"></div>';
			$(this.timelineContiner).append(eventElement);
			Event = this.Timeline.nextEvent(); 
		}
	}

	this.nextSegment = function() {

	}

	this.prevSegment = function() {

	}

	function setOptions() {
		if (optionsObject == undefined)
			return new DisplayOptions();
		else
			return optionsObject; 
	}

	function DisplayOptions() {
		this.width = '100%';
		this.height = '100px';
		this.eventViewWidth = '100%';
		this.eventViewHeight = '400px';
		this.segmentLength = 10;
		this.container = '#timeline-container';
		this.timelineContiner = '#timeline';
		this.eventViewContainer = '#event-viewer-container'; 
	}

}

