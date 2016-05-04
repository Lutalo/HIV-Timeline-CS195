// Display Class, for displaying the timeline. 

function Display(TimelineObject, optionsObject, controlObject) {

	var that = this; 

	this.currentSegment = -1; 

	this.displayOptions = setOptions();

	this.Control = setControls(); 

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
	    this.container.css({width: styles.width}); 
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
	    this.eventViewContainer.css({width: styles.width}); 
		newElement.css(styles);
		this.Control.drawNextButton();
		this.Control.drawPrevButton(); 
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
		lineRule = (line.outerWidth() / (segmL + 1));

		$.each($('#timeline div'), function() {
			vLineStyles.left = (vLineStyles.left + lineRule); 
			$(this).css(vLineStyles); 
		});
	}

	// Draws events in order from the starting event up to the segment
	// length defined in the display options.
	// @param startEvent: The event to begin from. 
	this.drawEvents = function(startEvent, direction) {
		var Event = startEvent;
		var eventsL = eventsLength(that, Event)
		var line = $(this.timelineContiner);
		var eventElementString, thisElement;
		var eventStyles = {
			left: 0	
		};

		if (direction == 'next') 
			eventStyles.left = parseInt(this.displayOptions.width) + 100;
		if (direction == 'prev')
			eventStyles.left = -100; 

		console.log(eventStyles.left); 

		$('#timeline div.oldEvent').animate({left: eventStyles.left*-1}, 1000, function() {
			$('#timeline div.oldEvent').remove();
		});

		for (var i = 0; i < eventsL; i++) {
			eventElementString = '<div id="' + Event.getId() + '" class="' + Event.getType() + ' event"></div>';
			$(this.timelineContiner).append(eventElementString);
			thisElement = $('#timeline div.event').last();
			if (direction == undefined) {
				eventStyles.left = findPosition(that, Event);
				thisElement.css(eventStyles);
			} else {
				thisElement.css(eventStyles);
				thisElement.animate({left: findPosition(that, Event)}, 1000);
			}

			Event = this.Timeline.nextEvent();
		}

		$('#timeline div.event').click(function() {
			drawEventView(this.id);  
		});

	}

	this.nextEvent = function() {

	}

	this.prevEvent = function() {

	}

	this.nextSegment = function() {
		clearSegment();
		this.drawEvents(this.Timeline.currentEvent(), 'next');
	}

	this.prevSegment = function() {
		clearSegment();
		this.drawEvents(this.Timeline.currentEvent(), 'prev');
	}

	function drawEventView(id) {
		var Event = this.Timeline.getId(id);
		alert(Event.getText()); 	
	}

	function clearSegment() {
		var amountLeft;
		var oldEvents = $('#timeline div.event')
		
		$.each(oldEvents, function() {
			amountLeft = parseInt($(this).css('left'));
			$(this).addClass('oldEvent').removeClass('event');
		});
	}

	function findPosition(that, Event) {
		var eventYear, eventPos;
		var segmL = that.displayOptions.segmentLength;
		var pixelsPerSeg = parseInt(that.displayOptions.width) / segmL //108
		var pixelsPerMonth = Event.getDate().getMonth() * (pixelsPerSeg / 12); // x+1 * 9
		eventYear = parseInt(Event.getDate().getFullYear().toString().charAt(3)); // x
		eventPos = pixelsPerSeg * eventYear + pixelsPerMonth;
		// console.log(pixelsPerSeg + ' * ' + eventYear + ' + ' + pixelsPerMonth); 
		if (eventPos < pixelsPerSeg) return pixelsPerSeg + eventPos; else return eventPos;
	}

	function eventsLength(that, Event) {
		var EventId = Event.getId();
		var startEventId = EventId; 
		var count = 0;
		var startYear = Event.getDate().getFullYear();
		var endYear = startYear + 10; 

		while (endYear > Event.getDate().getFullYear()) {
			EventId = Event.getId();
			// console.log(EventId);
			// console.log(that.Timeline.numOfEvents());
			// console.log(EventId >= that.Timeline.numOfEvents());
			if (EventId == that.Timeline.numOfEvents()) {
				count++;
				// console.log('COUNT: ' + count);
				// console.log('ID: ' + EventId);
				break;
			}
				
			Event = that.Timeline.nextEvent();
			count++;
			
		}
			
		that.Timeline.getId(startEventId); 
		return count; 

	}

	function setOptions() {
		if (optionsObject == undefined)
			return new DisplayOptions();
		else
			return optionsObject; 
	}

	function setControls() {
		if (controlObject == undefined)
			return new Control(that);
		else
			return controlObject; 
	}

	function DisplayOptions() {
		this.width = '1200px';
		this.height = '100px';
		this.eventViewWidth = this.width;
		this.eventViewHeight = '400px';
		this.segmentLength = 10;
		this.container = '#timeline-container';
		this.timelineContiner = '#timeline';
		this.eventViewContainer = '#event-viewer-container'; 
	}

	function Control(display) {
		
		this.filterContainer = '#filter-container';
		this.nextButton = '#next-button';
		this.prevButton = '#prev-button';
		
		this.drawNextButton = function() {
			var eventView = display.eventViewContainer
			var newElement = '<div id="next-button"></div>';
			var nextStyles = {
				position: 'absolute',
				width: '14px',
				height: '23px',
				top: '50%',
				right: '-28px'
			};
			
			$(eventView).append(newElement); 
			$(this.nextButton).css(nextStyles);
			$(this.nextButton).click(function() {
				display.nextSegment(); 
			});

		}
		
		this.drawPrevButton = function() {
			var eventView = display.eventViewContainer
			var newElement = '<div id="prev-button"></div>';
			var prevStyles = {
				position: 'absolute',
				width: '14px',
				height: '23px',
				top: '50%',
				left: '-28px'
			};
			
			$(eventView).append(newElement); 
			$(this.prevButton).css(prevStyles);
			$(this.prevButton).click(function() {
				display.prevSegment(); 
			});
		}

		this.drawFilter = function() {

		}

	}

}

