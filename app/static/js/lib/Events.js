// Events class containing event.

function Events(name) {

	this.name = name;

	this.eventsArray = [];

	this.firstEventInt = 0; 

	this.currentEventInt = this.firstEventInt;

	this.getName = function() {
		return this.name; 
	}

	this.getSize = function() {
		return this.eventsArray.length; 
	}

	this.addEvent = function(date, string) {
		var newEvent = new Event(date, string);
		this.eventsArray.push(newEvent);
		return newEvent;  
	}

	this.firstEvent = function() {
		this.currentEventInt = this.firstEventInt;
		return this.eventsArray[this.currentEventInt]; 
	}

	this.currentEvent = function() {
		return this.eventsArray[this.currentEventInt]; 
	}

	this.nextEvent = function() {
		this.currentEventInt++;
		if (this.currentEventInt >= this.getSize())
			this.currentEventInt = this.firstEventInt; 
		return this.eventsArray[this.currentEventInt]; 
	}

	this.prevEvent = function() {
		this.currentEventInt--;
		return this.eventsArray[this.currentEventInt]; 
	}	

	this.getAll = function() {
		return this.eventsArray;
	}

}