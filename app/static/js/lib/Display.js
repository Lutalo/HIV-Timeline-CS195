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
		var line = $(this.timelineContiner);
		var div = '<div class="vertical-line"></div>'
		var vLineStyles = {
			left: 0		
		};

		line.append('<hr style="width:' + this.displayOptions.width + ';">');

		for (var i = 0; i < segmL; i++) {
			vLine = line.append(div)
		}

		// container width divided by the..
		// segment length plus the width of a vertical line, 
		// minus the width of the vertical lines. 
		lineRule = (line.outerWidth() / (segmL + 1));

		$.each($('#timeline div'), function() {
			vLineStyles.left = (vLineStyles.left + lineRule); 
			$(this).css(vLineStyles); 
		});
	}

	// Draws events in order from the firstEvent up to the segment
	// length defined in the display options.
	// @param firstEvent: The event to begin from. 
	this.drawEvents = function(firstEvent) {
		var lineRule; 
		var Event = firstEvent;
		var segmL = this.displayOptions.segmentLength;
		var line = $(this.timelineContiner);
		var eventElement;
		var eventStyles = {
			left: 0		
		};
		
		for (var i = 0; i < segmL; i++) {
			eventElement = '<div id="' + Event.getId() + '" class="' + Event.getType() + ' event"></div>';
			$(this.timelineContiner).append(eventElement);
			Event = this.Timeline.nextEvent(); 
		}

		lineRule = (line.outerWidth() / (segmL + 1));

		$.each($('#timeline div.event'), function() {
			eventStyles.left = (eventStyles.left + lineRule); 
			$(this).css(eventStyles);
		});

		$('#timeline div.event').click(function() {
			drawEventView(this.id);  
		});

	}

	this.nextSegment = function() {
		var lineRule;
		var newAttr = {};
		var Event = this.Timeline.currentEvent();
		var segmL = this.displayOptions.segmentLength;
		var line = $(this.timelineContiner);
		var eventElement = $('#timeline div.event').first();
		var eventStyles = {
			left: 0		
		};
		
		for (var i = 0; i < segmL; i++) {
			newAttr = {
				id: Event.getId(),
				class: Event.getType() + ' event'
			}
			eventElement.attr(newAttr);
			eventElement = eventElement.next(); 
			Event = this.Timeline.nextEvent(); 
		}

		lineRule = (line.outerWidth() / (segmL + 1));

		$.each($('#timeline div.event'), function() {
			eventStyles.left = (eventStyles.left + lineRule); 
			$(this).css(eventStyles);	
		});
	}

	this.prevSegment = function() {
		var lineRule;
		var newAttr = {};
		var segmL = this.displayOptions.segmentLength;
		var line = $(this.timelineContiner);
		var eventElement = $('#timeline div.event').last();
		var Event = this.Timeline.getId(eventElement.attr('id') - segmL);
		var eventStyles = {
			left: 0		
		};
		
		for (var i = 0; i < segmL; i++) {
			newAttr = {
				id: Event.getId(),
				class: Event.getType() + ' event'
			}
			eventElement.attr(newAttr);
			eventElement = eventElement.prev(); 
			Event = this.Timeline.prevEvent(); 
		}

		lineRule = (line.outerWidth() / (segmL + 1));

		$.each($('#timeline div.event'), function() {
			eventStyles.left = (eventStyles.left + lineRule); 
			$(this).css(eventStyles);	
		});
	}

	function setOptions() {
		if (optionsObject == undefined)
			return new DisplayOptions();
		else
			return optionsObject; 
	}

	function drawEventView(id) {
		var Event = this.Timeline.getId(id);
		alert(Event.getText()); 	
	}

	function DisplayOptions() {
		this.width = '1080px';
		this.height = '100px';
		this.eventViewWidth = '1080px';
		this.eventViewHeight = '400px';
		this.segmentLength = 10;
		this.container = '#timeline-container';
		this.timelineContiner = '#timeline';
		this.eventViewContainer = '#event-viewer-container'; 
	}

}

