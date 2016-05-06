// Display Class, for displaying the timeline. 

function Display(TimelineObject, optionsObject, controlObject) {

	var that = this; 

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

	this.drawEvents = function(direction) {
		 
		if (direction == undefined)
			this.nextSegment(this.Timeline.currentEvent()); 
		else if (direction == 'next') {
			var lastEvent = $('#timeline div.event').last();
			this.Timeline.getId(parseInt(lastEvent.attr('id')));
			// console.log(Event); 
			clearSegment();
			this.nextSegment(this.Timeline.nextEvent()); 
		} else if (direction == 'prev') {
			var firstEvent = $('#timeline div.event').first();
			this.Timeline.getId(parseInt(firstEvent.attr('id')));
			// console.log(Event); 
			clearSegment();
			this.prevSegment(this.Timeline.prevEvent());
		}

		$('#timeline div.event').click(function() {
			drawEventView(this.id);  
		});

	}

	this.nextEvent = function() {

	}

	this.prevEvent = function() {

	}

	this.nextSegment = function(Event) {
		var startYear = Event.getDate().getFullYear();
		var endYear = startYear + 10; 
		var line = $(this.timelineContiner);
		var eventElementString, thisElement, EventId, endCondition;
		var eventStyles = {left: parseInt(this.displayOptions.width)}; 

		$('#timeline div.oldEvent').animate({left: -1, opacity: 0}, 1000, function() {
			$('#timeline div.oldEvent').remove();
		});
		
		while (Event.getDate().getFullYear() < endYear) {
			EventId = Event.getId(); 
			eventElementString = '<div id="' + EventId + '" class="' + Event.getType() + ' event"></div>';
			line.append(eventElementString);
			thisElement = $('#timeline div.event').last();
			eventStyles.left = parseInt(this.displayOptions.width);
			eventStyles.opacity = 0; 
			thisElement.css(eventStyles);
			thisElement.animate({left: findPosition(that, Event), opacity: 1}, 1000);
			if (this.Timeline.isLast()) {
				this.Control.removeNextButton();
				break;
			} else if (this.Timeline.isFirst()) {
				this.Control.removePrevButton(); 
			} else {
				if ($(this.Control.nextButton).length == 0)
					this.Control.drawNextButton();
				if ($(this.Control.prevButton).length == 0)
					this.Control.drawPrevButton();
			}
					
			Event = this.Timeline.nextEvent();
		}

	}

	this.prevSegment = function(Event) {
		var startYear = Event.getDate().getFullYear();
		var endYear = startYear - 10;
		var line = $(this.timelineContiner);
		var eventElementString, thisElement, EventId, endCondition, firstEvent;
		var eventStyles = {}; 
		
		$('#timeline div.oldEvent').animate({left: parseInt(this.displayOptions.width), opacity: 0}, 1000, function() {
			$('#timeline div.oldEvent').remove();
		});

		while (Event.getDate().getFullYear() > endYear) {
			EventId = Event.getId(); 
			eventElementString = '<div id="' + EventId + '" class="' + Event.getType() + ' event"></div>';
			firstEvent = $('#timeline div.event');
			if (firstEvent.length == 0) {
				line.append(eventElementString);
			} else {
				firstEvent = firstEvent.first();
				firstEvent.before(eventElementString);
			}
			thisElement = $('#timeline div.event').first();
			eventStyles.left = 0;
			eventStyles.opacity = 0; 
			thisElement.css(eventStyles);
			thisElement.animate({left: findPosition(that, Event), opacity: 1}, 1000);
			if (this.Timeline.isFirst()) {
				this.Control.removePrevButton();
				break;
			} else if (this.Timeline.isLast()) {
				this.Control.removePrevButton(); 
			} else {
				if ($(this.Control.nextButton).length == 0)
					this.Control.drawNextButton();
				if ($(this.Control.prevButton).length == 0)
					this.Control.drawPrevButton();
			}
					
			Event = this.Timeline.prevEvent();
		}
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
		var pixelsPerSeg = (parseInt(that.displayOptions.width) / segmL) - 22//108
		var pixelsPerMonth = Event.getDate().getMonth() * (pixelsPerSeg / 12); // x+1 * 9
		eventYear = parseInt(Event.getDate().getFullYear().toString().charAt(3)); // x
		eventPos = pixelsPerSeg * eventYear + pixelsPerMonth;
		// console.log(pixelsPerSeg + ' * ' + eventYear + ' + ' + pixelsPerMonth); 
		if (eventPos < pixelsPerSeg) return pixelsPerSeg + eventPos; else return eventPos;
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
		this.firstRulePos = parseInt(this.width) / this.segmentLength; 
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
				display.drawEvents('next'); 
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
				display.drawEvents('prev'); 
			});
		}

		this.removeNextButton = function() {
			$(this.nextButton).remove();
		}
		
		this.removePrevButton = function() {
			$(this.prevButton).remove();
		}

		this.drawFilter = function() {

		}

	}

}

// if (Event.getDate().getFullYear() > year) {
// 	console.log(year);
// 	year = Event.getDate().getFullYear()
// 	vLine.append('<p class="rule-text">' + year + '</p>');
// 	vLine.next(); 
// }