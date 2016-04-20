// Display Class, for displaying the timeline. 

function Display(TimelineObject, optionsObject) {

	this.currentSegment = -1; 

	this.displayOptions = setOptions(); 

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
		var vLine, lineRule; 
		var segmL = this.displayOptions.segmentLength
		var timeline = this.timelineObject; 
		var line = $('#timeline');
		var div = '<div class="vertical-line"></div>'
		var vLineStyles = {
			left: 0		
		};

		line.append('<hr>');

		for (var i = 0; i < segmL; i++) {
			vLine = line.append(div)
		}

		lineRule = line.outerWidth() / segmL; 

		console.log(lineRule); 

		$.each($('#timeline div'), function() {
			vLineStyles.left = (vLineStyles.left + lineRule); 
			$(this).css(vLineStyles); 
		});
	}

	this.drawEvent = function() {
		// Draw an event on a segment
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
		this.height = '50px';
		this.eventViewWidth = '100%';
		this.eventViewHeight = '400px';
		this.segmentLength = 10; 
	}

}

